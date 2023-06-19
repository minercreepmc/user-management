import { ID, QueryParams } from 'common-base-classes';
import { OutboxServicePort } from './outbox.interface';
export interface FindOne<Entity, EntityDetails> {
    findOne(params: QueryParams<EntityDetails>): Promise<Entity | undefined>;
}
export interface FindOneById<Entity> {
    findOneById(id: ID): Promise<Entity | undefined>;
}
export interface Save<Entity> {
    save(entity: Entity): Promise<Entity>;
}
export interface SaveMany<Entity> {
    saveMany(entities: Entity[]): Promise<Entity[]>;
}
export interface Delete<EntityDetails> {
    delete(params: QueryParams<EntityDetails>): Promise<boolean>;
}
export interface Update<Entity, EntityDetails> {
    update(params: QueryParams<EntityDetails>, newState: Entity): Promise<Entity>;
}
export interface Transaction {
    runInTransaction<T>(fn: (outBoxService: OutboxServicePort) => Promise<T>): Promise<T>;
    startTransaction(): Promise<void>;
    commitTransaction(): Promise<void>;
    rollbackTransaction(): Promise<void>;
}
