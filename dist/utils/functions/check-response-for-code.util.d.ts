import { Response } from 'supertest';
export interface CheckResponseForCodeOptions {
    response: Response;
    statusCode: number;
    codes: string[];
}
export declare function checkResponseForCode(options: CheckResponseForCodeOptions): boolean;
