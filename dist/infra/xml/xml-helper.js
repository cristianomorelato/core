"use strict";
/**
 * Helper para construir XML sem dependencias externas.
 * Gera strings XML validas com escape de caracteres especiais.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeXml = escapeXml;
exports.sanitizeXmlChars = sanitizeXmlChars;
exports.tag = tag;
exports.tagGroup = tagGroup;
exports.formatNumber = formatNumber;
exports.formatDate = formatDate;
exports.formatDateOnly = formatDateOnly;
exports.padLeft = padLeft;
exports.stripAccents = stripAccents;
function escapeXml(value) {
    return sanitizeXmlChars(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}
/**
 * Remove caracteres invalidos em XML 1.0.
 * Permitidos: #x9 | #xA | #xD | [#x20-#xD7FF] | [#xE000-#xFFFD] | [#x10000-#x10FFFF]
 * Isso elimina C0 controls (exceto tab/LF/CR), DEL, C1 controls (U+0080-009F),
 * e os codepoints U+FFFE/U+FFFF que causam rejeicao 402 na SEFAZ.
 */
function sanitizeXmlChars(value) {
    return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F\x80-\x9F\uFFFE\uFFFF]/g, '');
}
function tag(name, value, attrs) {
    if (value === undefined || value === null || value === '')
        return '';
    const escaped = typeof value === 'string' ? escapeXml(value) : String(value);
    const attrStr = attrs ? ` ${attrs}` : '';
    return `<${name}${attrStr}>${escaped}</${name}>`;
}
function tagGroup(name, content, attrs) {
    if (!content)
        return '';
    const attrStr = attrs ? ` ${attrs}` : '';
    return `<${name}${attrStr}>${content}</${name}>`;
}
function formatNumber(value, decimals) {
    return value.toFixed(decimals);
}
function formatDate(date, utcOffset = '-03:00') {
    const sign = utcOffset.startsWith('+') ? 1 : -1;
    const [h, m] = utcOffset.replace(/[+-]/, '').split(':').map(Number);
    const offsetMs = sign * (h * 60 + m) * 60 * 1000;
    const local = new Date(date.getTime() + offsetMs);
    const yyyy = local.getUTCFullYear();
    const MM = String(local.getUTCMonth() + 1).padStart(2, '0');
    const dd = String(local.getUTCDate()).padStart(2, '0');
    const hh = String(local.getUTCHours()).padStart(2, '0');
    const mm = String(local.getUTCMinutes()).padStart(2, '0');
    const ss = String(local.getUTCSeconds()).padStart(2, '0');
    return `${yyyy}-${MM}-${dd}T${hh}:${mm}:${ss}${utcOffset}`;
}
/**
 * Formata uma data sem hora (tipo TData do leiaute: AAAA-MM-DD), como exigido
 * por `dPag`, `dVenc` e afins.
 *
 * Usa os componentes locais da data — `new Date('2026-04-28T00:00:00')` vira
 * `2026-04-28` no fuso da maquina, sem o deslocamento de dia que o UTC causaria.
 */
function formatDateOnly(date) {
    const yyyy = date.getFullYear();
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${MM}-${dd}`;
}
function padLeft(value, length) {
    return String(value).padStart(length, '0');
}
/**
 * Remove acentos e diacriticos de uma string via Unicode NFD normalization.
 * Necessario para NFC-e: a SEFAZ de alguns estados (ex: MT) rejeita caracteres
 * acentuados no XML com erro 402 "codificacao diferente de UTF-8".
 */
function stripAccents(value) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}
//# sourceMappingURL=xml-helper.js.map