import { CertificateInfo } from '../../contracts/CertificateProvider';
/**
 * Extrai o certificado do cliente de um arquivo PFX/P12, em PEM.
 */
export declare function extractCertPem(pfx: Buffer, password: string): string;
/**
 * Dados de um certificado A1 ja carregado em PEM.
 *
 * Nos certificados ICP-Brasil o CN do titular vem como `NOME:DOCUMENTO` — dai
 * saem `titular` e `documento` (CNPJ com 14 digitos, CPF com 11).
 */
export declare function parseCertificateInfo(certPem: string): CertificateInfo;
/**
 * Dados do certificado A1 sem carrega-lo para uso: titular, documento, emissor
 * e validade. Ao contrario do `A1CertificateProvider`, nao rejeita certificado
 * vencido — a ideia e justamente poder inspecionar um.
 */
export declare function certInfo(pfx: Buffer, password: string): CertificateInfo;
//# sourceMappingURL=cert-info.d.ts.map