/**
 * Valida um CNPJ (14 digitos, sem formatacao).
 */
export declare function isValidCnpj(cnpj: string): boolean;
/**
 * Formata um CNPJ: 11222333000181 -> 11.222.333/0001-81
 */
export declare function formatCnpj(cnpj: string): string;
/**
 * Remove formatacao do CNPJ: 11.222.333/0001-81 -> 11222333000181
 */
export declare function cleanCnpj(cnpj: string): string;
//# sourceMappingURL=cnpj.d.ts.map