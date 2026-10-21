"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeHttpSefazTransport = void 0;
const node_https_1 = require("node:https");
const node_url_1 = require("node:url");
const DFeError_1 = require("../../shared/errors/DFeError");
class NodeHttpSefazTransport {
    timeout;
    rejectUnauthorized;
    constructor(options) {
        this.timeout = options?.timeout ?? 30000;
        this.rejectUnauthorized = options?.rejectUnauthorized ?? false;
    }
    async send(req) {
        return new Promise((resolve, reject) => {
            const url = new node_url_1.URL(req.url);
            // Garante UTF-8 limpo: normaliza Unicode (NFC), remove BOM e chars invalidos em XML 1.0
            const cleanXml = req.xml
                .normalize('NFC')
                .replace(/\uFEFF/g, '')
                // eslint-disable-next-line no-control-regex
                .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\x80-\x9F\uFFFE\uFFFF]/g, '');
            const utf8Buffer = Buffer.from(cleanXml, 'utf-8');
            const httpReq = (0, node_https_1.request)({
                hostname: url.hostname,
                port: url.port || 443,
                path: url.pathname + url.search,
                method: 'POST',
                headers: {
                    'Content-Type': `application/soap+xml; charset=UTF-8; action="${req.soapAction}"`,
                    'SOAPAction': req.soapAction,
                    'Content-Length': utf8Buffer.byteLength
                },
                pfx: req.pfx,
                passphrase: req.password,
                rejectUnauthorized: this.rejectUnauthorized,
                timeout: this.timeout
            }, (res) => {
                const chunks = [];
                res.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                res.on('end', () => {
                    const body = Buffer.concat(chunks).toString('utf-8');
                    const statusCode = res.statusCode ?? 0;
                    if (statusCode < 200 || statusCode >= 300) {
                        reject(new DFeError_1.DFeError(`Erro HTTP ${statusCode} ao comunicar com SEFAZ: ${body.slice(0, 500)}`));
                        return;
                    }
                    resolve({ xml: body, statusCode });
                });
                res.on('error', (err) => {
                    reject(new DFeError_1.DFeError(`Erro ao ler resposta da SEFAZ: ${err.message}`, err));
                });
            });
            httpReq.on('timeout', () => {
                httpReq.destroy();
                reject(new DFeError_1.DFeError('Timeout ao comunicar com SEFAZ'));
            });
            httpReq.on('error', (err) => {
                reject(new DFeError_1.DFeError(`Erro de conexao com SEFAZ: ${err.message}`, err));
            });
            httpReq.write(utf8Buffer);
            httpReq.end();
        });
    }
}
exports.NodeHttpSefazTransport = NodeHttpSefazTransport;
//# sourceMappingURL=NodeHttpSefazTransport.js.map