import {Entity, model, property} from '@loopback/repository';

@model()
export class Province extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;


  constructor(data?: Partial<Province>) {
    super(data);
  }
}

export interface ProvinceRelations {
  // describe navigational properties here
}

export type ProvinceWithRelations = Province & ProvinceRelations;
