"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DFeError = void 0;
class DFeError extends Error {
    cause;
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'DFeError';
    }
}
exports.DFeError = DFeError;
//# sourceMappingURL=DFeError.js.map