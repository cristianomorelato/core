"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateError = void 0;
const DFeError_1 = require("./DFeError");
class CertificateError extends DFeError_1.DFeError {
    constructor(message, cause) {
        super(message, cause);
        this.name = 'CertificateError';
    }
}
exports.CertificateError = CertificateError;
//# sourceMappingURL=CertificateError.js.map