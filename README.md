# jsonschemabug

Error config is here: src/controllers/store.controller.ts line 75, when i set title with includerelation, error occurred.
```
@get('/stores', {
    responses: {
      '200': {
        description: 'Array of Store model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Store, { title: 'StoreRes', includeRelations: true }),
```
