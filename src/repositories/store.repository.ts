import { DefaultCrudRepository, BelongsToAccessor, repository } from '@loopback/repository';
import { Store, StoreRelations, Country, User } from '../models';
import { MydbDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { UserRepository } from './user.repository';
import { CountryRepository } from '.';

export class StoreRepository extends DefaultCrudRepository<
  Store,
  typeof Store.prototype.id,
  StoreRelations
  > {
  public readonly country: BelongsToAccessor<Country, string>;
  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
    @repository.getter('CountryRepository')
    countryRepositoryGetter: Getter<CountryRepository>,
  ) {
    super(Store, dataSource);
    this.country = this.createBelongsToAccessorFor('country', countryRepositoryGetter)
    this.registerInclusionResolver('country', this.country.inclusionResolver)
  }
}
