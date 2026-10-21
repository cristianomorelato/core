"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A1CertificateProvider = void 0;
const node_child_process_1 = require("node:child_process");
const node_crypto_1 = require("node:crypto");
const CertificateError_1 = require("../../shared/errors/CertificateError");
const cert_info_1 = require("./cert-info");
class A1CertificateProvider {
    pfx;
    password;
    constructor(pfx, password) {
        this.pfx = pfx;
        this.password = password;
    }
    async load() {
        try {
            const privateKey = this.extractPrivateKey();
            const certPem = this.extractCertificate();
            const cert = new node_crypto_1.X509Certificate(certPem);
            const notAfter = new Date(cert.validTo);
            if (notAfter < new Date()) {
                throw new CertificateError_1.CertificateError(`Certificado expirado em ${notAfter.toISOString()}`);
            }
            return {
                pfx: this.pfx,
                password: this.password,
                notAfter,
                privateKey,
                certPem,
                info: (0, cert_info_1.parseCertificateInfo)(certPem)
            };
        }
        catch (error) {
            if (error instanceof CertificateError_1.CertificateError)
                throw error;
            const message = error instanceof Error ? error.message : String(error);
            throw new CertificateError_1.CertificateError(`Falha ao carregar certificado A1: ${message}`, error instanceof Error ? error : undefined);
        }
    }
    extractPrivateKey() {
        const output = (0, node_child_process_1.execFileSync)('openssl', ['pkcs12', '-nocerts', '-nodes', '-passin', `pass:${this.password}`], { input: this.pfx, stdio: ['pipe', 'pipe', 'pipe'] }).toString();
        const match = output.match(/-----BEGIN (?:RSA )?PRIVATE KEY-----[\s\S]*?-----END (?:RSA )?PRIVATE KEY-----/);
        if (!match) {
            throw new CertificateError_1.CertificateError('Chave privada nao encontrada no certificado PFX');
        }
        return match[0];
    }
    extractCertificate() {
        return (0, cert_info_1.extractCertPem)(this.pfx, this.password);
    }
}
exports.A1CertificateProvider = A1CertificateProvider;
//# sourceMappingURL=A1CertificateProvider.js.map