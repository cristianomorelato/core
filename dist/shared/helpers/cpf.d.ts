/**
 * Valida um CPF (11 digitos, sem formatacao).
 */
export declare function isValidCpf(cpf: string): boolean;
/**
 * Formata um CPF: 12345678901 -> 123.456.789-01
 */
export declare function formatCpf(cpf: string): string;
/**
 * Remove formatacao do CPF: 123.456.789-01 -> 12345678901
 */
export declare function cleanCpf(cpf: string): string;
//# sourceMappingURL=cpf.d.ts.map