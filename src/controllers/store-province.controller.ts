import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Store,
  Province,
} from '../models';
import {StoreRepository} from '../repositories';

export class StoreProvinceController {
  constructor(
    @repository(StoreRepository)
    public storeRepository: StoreRepository,
  ) { }

  @get('/stores/{id}/province', {
    responses: {
      '200': {
        description: 'Province belonging to Store',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Province)},
          },
        },
      },
    },
  })
  async getProvince(
    @param.path.string('id') id: typeof Store.prototype.id,
  ): Promise<Province> {
    return this.storeRepository.province(id);
  }
}
