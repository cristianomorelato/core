import { XmlSigner } from '../../contracts/XmlSigner';
import { CertificateData } from '../../contracts/CertificateProvider';
export type SignableElementConfig = {
    readonly elementName: string;
    readonly parentElement: string;
};
export declare class DefaultXmlSigner implements XmlSigner {
    private readonly signableElements;
    constructor(signableElements?: SignableElementConfig[]);
    sign(xml: string, certificate: CertificateData): string;
    private findSignableElement;
    /**
     * Propaga namespaces herdados do elemento pai para o elemento filho.
     * Necessario para C14N: o digest deve incluir namespaces efetivos.
     */
    private propagateNamespaces;
}
//# sourceMappingURL=DefaultXmlSigner.d.ts.map