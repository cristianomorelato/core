import { DFeError } from './DFeError';
export type FieldError = {
    readonly field: string;
    readonly message: string;
    readonly expected?: string;
    readonly received?: string;
};
export declare class SchemaValidationError extends DFeError {
    readonly errors: FieldError[];
    constructor(message: string, errors: FieldError[]);
}
//# sourceMappingURL=SchemaValidationError.d.ts.map