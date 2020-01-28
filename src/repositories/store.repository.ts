import {DefaultCrudRepository} from '@loopback/repository';
import {Store, StoreRelations} from '../models';
import {MydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class StoreRepository extends DefaultCrudRepository<
  Store,
  typeof Store.prototype.id,
  StoreRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Store, dataSource);
  }
}
