import { UserAggregateDetails } from '@aggregates/user';
import {
  MikroOrmQueryMapperBase,
  OrmModelDetails,
  QueryParams,
} from '@utils/base/database/repositories/mikroorm';
import { UserMikroOrmModel } from './user.mikroorm.model';

export type UserQueryParams = QueryParams<UserAggregateDetails>;

type UserMikroOrmModelDetails = Partial<OrmModelDetails<UserMikroOrmModel>>;

export class UserMikroOrmQueryMapper extends MikroOrmQueryMapperBase<
  UserAggregateDetails,
  UserMikroOrmModel
> {
  protected toQueryDetails(params: UserQueryParams): UserMikroOrmModelDetails {
    const where: UserMikroOrmModelDetails = {};
    const { firstName, role, email, lastName, username } = params;

    if (firstName) {
      where.firstName = firstName.unpack();
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

    return where;
  }
}
