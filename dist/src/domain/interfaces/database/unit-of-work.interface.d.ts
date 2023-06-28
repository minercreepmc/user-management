import { Transaction } from './plugins.interface';
export interface UnitOfWorkPort extends Transaction {
}
export declare const unitOfWorkDiToken: unique symbol;
