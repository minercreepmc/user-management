import { AbstractTypeOrmModel } from 'nest-typeorm-common-classes';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserTypeOrmModel extends AbstractTypeOrmModel {
  constructor(options?: UserTypeOrmModel) {
    super(options);
  }
  @Column()
  username: string;

  @Column({ nullable: true })
  email?: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  password: string;

  @Column({})
  role: string;
}
