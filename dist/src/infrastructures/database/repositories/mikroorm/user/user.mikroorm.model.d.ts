import { MikroOrmModelBase } from '@utils/base/database/repositories/mikroorm';
export declare class UserMikroOrmModel extends MikroOrmModelBase {
    constructor(props?: UserMikroOrmModel);
    username: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    hashed: string;
    role: string;
}
