import {DefaultCrudRepository} from '@loopback/repository';
import {Province, ProvinceRelations} from '../models';
import {MydbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProvinceRepository extends DefaultCrudRepository<
  Province,
  typeof Province.prototype.id,
  ProvinceRelations
> {
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
  ) {
    super(Province, dataSource);
  }
}
