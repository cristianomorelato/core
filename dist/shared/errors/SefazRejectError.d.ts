import { DFeError } from './DFeError';
export declare class SefazRejectError extends DFeError {
    readonly cStat: string;
    readonly xMotivo: string;
    readonly uf?: string | undefined;
    constructor(cStat: string, xMotivo: string, uf?: string | undefined);
}
//# sourceMappingURL=SefazRejectError.d.ts.map