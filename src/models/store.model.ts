import { Entity, model, property, belongsTo } from '@loopback/repository';
import { User } from './user.model';
import { Country } from './country.model';
import {Province} from './province.model';

@model()
export class Store extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @belongsTo(() => User)
  createUserId: string;

  @belongsTo(() => Country)
  countryId: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  cif: string;

  @property({
    type: 'string',
    required: true,
  })
  company: string;

  @belongsTo(() => Province)
  provinceId: string;

  constructor(data?: Partial<Store>) {
    super(data);
  }
}

export interface StoreRelations {
  // describe navigational properties here
}

export type StoreWithRelations = Store & StoreRelations;
