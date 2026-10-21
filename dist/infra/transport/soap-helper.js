"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSoapBody = extractSoapBody;
exports.extractTag = extractTag;
const DFeError_1 = require("../../shared/errors/DFeError");
/**
 * Extrai o conteudo dentro de <soap12:Body> ou <soapenv:Body>.
 */
function extractSoapBody(soapXml) {
    const match = soapXml.match(/<(?:soap12|soapenv|soap):Body[^>]*>([\s\S]*?)<\/(?:soap12|soapenv|soap):Body>/i);
    if (!match) {
        throw new DFeError_1.DFeError('Resposta SOAP invalida: Body nao encontrado');
    }
    return match[1].trim();
}
/**
 * Extrai o conteudo de uma tag XML simples.
 */
function extractTag(xml, tag) {
    const match = xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`));
    return match ? match[1] : null;
}
//# sourceMappingURL=soap-helper.js.map