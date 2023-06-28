export declare abstract class BusinessRulesEnforcer<Failures extends any[]> {
    exceptions: Failures;
    protected addException(...exceptions: Failures): void;
    getExceptions(): Failures;
    clear(): void;
}
export declare class CompositeBusinessRulesEnforcer<Failures extends any[]> extends BusinessRulesEnforcer<Failures> {
    private enforcers;
    addEnforcer(enforcer: BusinessRulesEnforcer<Failures>): void;
    getExceptions(): Failures;
    clear(): void;
}
