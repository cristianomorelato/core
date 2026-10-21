import { SefazTransport, SefazRequest, SefazResponse } from '../../contracts/SefazTransport';
export declare class NodeHttpSefazTransport implements SefazTransport {
    private readonly timeout;
    private readonly rejectUnauthorized;
    constructor(options?: {
        timeout?: number;
        rejectUnauthorized?: boolean;
    });
    send(req: SefazRequest): Promise<SefazResponse>;
}
//# sourceMappingURL=NodeHttpSefazTransport.d.ts.map