import { Result } from 'oxide.ts';
export declare abstract class ProcessBase<Success, Failures extends any[]> {
    exceptions: Failures;
    value: Success;
    abstract execute(domainOptions: any): Promise<Result<Success, Failures>>;
    protected abstract init(): void;
    protected clearExceptions(): void;
    protected clearValue(): void;
    protected getValidationResult(): Result<Success, Failures>;
}
