"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcMod11 = calcMod11;
/**
 * Calcula o digito verificador usando modulo 11 com pesos de 2 a 9.
 * Usado na chave de acesso de DFe e em validacoes de CNPJ.
 */
function calcMod11(value) {
    const digits = value.split('').map(Number);
    let weight = 2;
    let sum = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        sum += digits[i] * weight;
        weight = weight === 9 ? 2 : weight + 1;
    }
    const remainder = sum % 11;
    return remainder < 2 ? 0 : 11 - remainder;
}
//# sourceMappingURL=mod11.js.map