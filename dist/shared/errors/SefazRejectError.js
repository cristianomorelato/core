"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SefazRejectError = void 0;
const DFeError_1 = require("./DFeError");
class SefazRejectError extends DFeError_1.DFeError {
    cStat;
    xMotivo;
    uf;
    constructor(cStat, xMotivo, uf) {
        super(`SEFAZ rejeitou o documento: [${cStat}] ${xMotivo}`);
        this.cStat = cStat;
        this.xMotivo = xMotivo;
        this.uf = uf;
        this.name = 'SefazRejectError';
    }
}
exports.SefazRejectError = SefazRejectError;
//# sourceMappingURL=SefazRejectError.js.map