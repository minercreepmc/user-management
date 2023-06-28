import { Result } from 'oxide.ts';
import { BusinessRulesEnforcer, CompositeBusinessRulesEnforcer } from './business-rules-enforcer.base';
export interface ProcessBaseOptions<Failures extends any[]> {
    businessEnforcer?: BusinessRulesEnforcer<Failures>;
    compositeBusinessEnforcer?: CompositeBusinessRulesEnforcer<Failures>;
}
export declare abstract class ProcessBase<Success, Failures extends any[]> {
    protected exceptions: Failures;
    protected value: Success;
    private businessEnforcer;
    protected compositeBusinessEnforcer: CompositeBusinessRulesEnforcer<Failures>;
    constructor(options?: ProcessBaseOptions<Failures>);
    execute(command: any): Promise<Result<Success, Failures>>;
    protected abstract enforceBusinessRules(command: any): Promise<void>;
    protected abstract executeMainTask(command: any): Promise<Success>;
    private gatherExceptionsFromBusinessEnforcers;
    protected getEnforcer(): CompositeBusinessRulesEnforcer<Failures> | BusinessRulesEnforcer<Failures>;
    private executeMainTaskIfNoException;
    protected getProcessResult(): Result<Success, Failures>;
    protected init(): void;
    private clearExceptions;
    protected clearExceptionsInEnforcers(): void;
    private clearValue;
    protected hasNoExceptions(): boolean;
}
