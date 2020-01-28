import {
  DefaultCrudRepository,
  BelongsToAccessor,
  repository,
} from '@loopback/repository';
import {Store, StoreRelations, Country, User, Province} from '../models';
import {MydbDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import {UserRepository} from './user.repository';
import {CountryRepository} from '.';
import {ProvinceRepository} from './province.repository';

export class StoreRepository extends DefaultCrudRepository<
  Store,
  typeof Store.prototype.id,
  StoreRelations
> {
  public readonly user: BelongsToAccessor<User, typeof Store.prototype.id>;
  public readonly country: BelongsToAccessor<
    Country,
    typeof Store.prototype.id
  >;
  public readonly province: BelongsToAccessor<
    Province,
    typeof Store.prototype.id
  >;

  constructor(
    @inject('datasources.mydb') dataSource: MydbDataSource,
    @repository.getter('UserRepository')
    userRepositoryGetter: Getter<UserRepository>,
    @repository.getter('CountryRepository')
    countryRepositoryGetter: Getter<CountryRepository>,
    @repository.getter('ProvinceRepository')
    protected provinceRepositoryGetter: Getter<ProvinceRepository>,
  ) {
    super(Store, dataSource);
    this.user = this.createBelongsToAccessorFor('user', userRepositoryGetter);
    this.country = this.createBelongsToAccessorFor(
      'country',
      countryRepositoryGetter,
    );
    this.province = this.createBelongsToAccessorFor(
      'province',
      provinceRepositoryGetter,
    );
  }
}
