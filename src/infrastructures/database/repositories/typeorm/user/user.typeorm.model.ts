import { AbstractTypeOrmModel } from 'nest-typeorm-common-classes';
import { Column, Entity } from 'typeorm';

@Entity('user')
export class UserTypeOrmModel extends AbstractTypeOrmModel {
  constructor(options?: UserTypeOrmModel) {
    super(options);
    this.username = options?.username;
    this.email = options?.email;
    this.firstName = options?.firstName;
    this.lastName = options?.lastName;
    this.hashed = options?.hashed;
    this.role = options?.role;
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
  hashed: string;

  @Column({})
  role: string;
}
