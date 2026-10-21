"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaValidationError = void 0;
const DFeError_1 = require("./DFeError");
class SchemaValidationError extends DFeError_1.DFeError {
    errors;
    constructor(message, errors) {
        super(message);
        this.errors = errors;
        this.name = 'SchemaValidationError';
    }
}
exports.SchemaValidationError = SchemaValidationError;
//# sourceMappingURL=SchemaValidationError.js.map