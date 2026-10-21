export type AccessKeyParams = {
    readonly uf: string;
    readonly dataEmissao: Date;
    readonly cnpj: string;
    readonly modelo: string;
    readonly serie: number;
    readonly numero: number;
    readonly tipoEmissao: number;
    readonly codigoNumerico: string;
};
/**
 * Gera a chave de acesso de DFe com 44 digitos.
 *
 * Composicao:
 * - cUF (2): codigo IBGE da UF
 * - AAMM (4): ano e mes de emissao
 * - CNPJ (14): CNPJ do emitente
 * - mod (2): modelo do documento (55 = NFe, 57 = CTe, 58 = MDFe, 65 = NFCe)
 * - serie (3): serie do documento
 * - nNF (9): numero do documento
 * - tpEmis (1): tipo de emissao
 * - cNF (8): codigo numerico aleatorio
 * - cDV (1): digito verificador (mod11)
 */
export declare function generateAccessKey(params: AccessKeyParams): string;
/**
 * Gera um codigo numerico aleatorio de 8 digitos para a chave de acesso.
 */
export declare function generateNumericCode(): string;
//# sourceMappingURL=access-key.d.ts.map