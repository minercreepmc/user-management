import { Entity, Property } from '@mikro-orm/core';
import { MikroOrmModelBase } from '@utils/base/database/repositories/mikroorm';

@Entity({
  tableName: 'users',
})
export class UserMikroOrmModel extends MikroOrmModelBase {
  constructor(props?: UserMikroOrmModel) {
    super(props);
    Object.assign(this, props);
  }

  @Property()
  username: string;

  @Property({ nullable: true })
  email?: string;

  @Property({ nullable: true })
  firstName?: string;

  @Property({ nullable: true })
  lastName?: string;

  @Property()
  hashed: string;

  @Property({})
  role: string;
}
