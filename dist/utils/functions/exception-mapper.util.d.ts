import { DomainExceptionBase } from 'common-base-classes';
export declare const mapDomainExceptionsToObjects: (errors: DomainExceptionBase[]) => {
    code: string;
    message: string;
}[];
