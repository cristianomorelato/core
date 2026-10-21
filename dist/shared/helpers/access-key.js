"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccessKey = generateAccessKey;
exports.generateNumericCode = generateNumericCode;
const mod11_1 = require("./mod11");
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
function generateAccessKey(params) {
    const aamm = String(params.dataEmissao.getFullYear()).slice(2) +
        String(params.dataEmissao.getMonth() + 1).padStart(2, '0');
    const keyWithoutDv = params.uf +
        aamm +
        params.cnpj +
        params.modelo +
        String(params.serie).padStart(3, '0') +
        String(params.numero).padStart(9, '0') +
        String(params.tipoEmissao) +
        params.codigoNumerico;
    const dv = (0, mod11_1.calcMod11)(keyWithoutDv);
    return keyWithoutDv + String(dv);
}
/**
 * Gera um codigo numerico aleatorio de 8 digitos para a chave de acesso.
 */
function generateNumericCode() {
    return String(Math.floor(Math.random() * 100000000)).padStart(8, '0');
}
//# sourceMappingURL=access-key.js.map