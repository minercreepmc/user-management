import { UserAggregateDetails } from '@aggregates/user/user.aggregate.interface';
import { IBaseEntity } from 'common-base-classes';
import { AbstractQueryMapper, WhereClause } from 'nest-typeorm-common-classes';
import { UserTypeOrmModel } from './user.typeorm.model';

export type UserQueryParams = Partial<IBaseEntity & UserAggregateDetails>;

export class UserTypeOrmQueryMapper extends AbstractQueryMapper<
  UserAggregateDetails,
  UserTypeOrmModel
> {
  toQuery(params: UserQueryParams): WhereClause<UserTypeOrmModel> {
    const where: WhereClause<UserTypeOrmModel> = {};
    const {
      firstName,
      id,
      role,
      email,
      lastName,
      username,
      createdAt,
      updatedAt,
    } = params;

    if (firstName) {
      where.firstName = firstName.unpack();
    }

    if (id) {
      where.id = id.unpack();
    }

    if (role) {
      where.role = role.unpack();
    }

    if (email) {
      where.email = email.unpack();
    }

    if (lastName) {
      where.lastName = lastName.unpack();
    }

    if (username) {
      where.username = username.unpack();
    }

    if (createdAt) {
      where.createdAt = createdAt.unpack();
    }

    if (updatedAt) {
      where.updatedAt = updatedAt.unpack();
    }

    return where;
  }
}
