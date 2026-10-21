/**
 * Helper para construir XML sem dependencias externas.
 * Gera strings XML validas com escape de caracteres especiais.
 */
export declare function escapeXml(value: string): string;
/**
 * Remove caracteres invalidos em XML 1.0.
 * Permitidos: #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
 * Isso elimina C0 controls (exceto tab/LF/CR), DEL, C1 controls (U+0080-009F),
 * e os codepoints U+FFFE/U+FFFF que causam rejeicao 402 na SEFAZ.
 */
export declare function sanitizeXmlChars(value: string): string;
export declare function tag(name: string, value: string | number | undefined, attrs?: string): string;
export declare function tagGroup(name: string, content: string, attrs?: string): string;
export declare function formatNumber(value: number, decimals: number): string;
export declare function formatDate(date: Date, utcOffset?: string): string;
/**
 * Formata uma data sem hora (tipo TData do leiaute: AAAA-MM-DD), como exigido
 * por `dPag`, `dVenc` e afins.
 *
 * Usa os componentes locais da data — `new Date('2026-04-28T00:00:00')` vira
 * `2026-04-28` no fuso da maquina, sem o deslocamento de dia que o UTC causaria.
 */
export declare function formatDateOnly(date: Date): string;
export declare function padLeft(value: number | string, length: number): string;
/**
 * Remove acentos e diacriticos de uma string via Unicode NFD normalization.
 * Necessario para NFC-e: a SEFAZ de alguns estados (ex: MT) rejeita caracteres
 * acentuados no XML com erro 402 "codificacao diferente de UTF-8".
 */
export declare function stripAccents(value: string): string;
//# sourceMappingURL=xml-helper.d.ts.map