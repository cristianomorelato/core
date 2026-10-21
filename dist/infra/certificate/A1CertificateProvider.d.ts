import { CertificateProvider, CertificateData } from '../../contracts/CertificateProvider';
export declare class A1CertificateProvider implements CertificateProvider {
    private readonly pfx;
    private readonly password;
    constructor(pfx: Buffer, password: string);
    load(): Promise<CertificateData>;
    private extractPrivateKey;
    private extractCertificate;
}
//# sourceMappingURL=A1CertificateProvider.d.ts.map