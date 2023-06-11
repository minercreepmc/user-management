import { ObjectQuery } from '@mikro-orm/core';
import { MikroOrmModelDetails, QueryParams } from './common-type';
import { MikroOrmModelBase } from './mikroorm-model.base';

export abstract class MikroOrmQueryMapperBase<
  EntityDetails,
  OrmModel extends MikroOrmModelBase,
> {
  protected abstract toQueryDetails(
    details: QueryParams<EntityDetails>,
  ): Partial<MikroOrmModelDetails>;
  toQuery(params: QueryParams<EntityDetails>): ObjectQuery<OrmModel> {
    const query: ObjectQuery<OrmModel> = {} as ObjectQuery<OrmModel>;
    const { id, createdAt, updatedAt } = params;

    if (id) {
      query.id = id.unpack();
    }

    if (createdAt) {
      query.createdAt = createdAt.unpack();
    }

    if (updatedAt) {
      query.updatedAt = updatedAt.unpack();
    }

    return {
      ...query,
      ...this.toQueryDetails(params),
    };
  }
}
