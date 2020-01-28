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
Error :
related schema properties are belong to the model store instead of related model
<img width="1597" alt="Captura de pantalla 2020-01-28 a las 10 39 11" src="https://user-images.githubusercontent.com/6631168/73252216-b125fa00-41ba-11ea-92f6-6216ec26eeab.png">

example:
<img width="1651" alt="Captura de pantalla 2020-01-28 a las 10 39 26" src="https://user-images.githubusercontent.com/6631168/73252217-b1be9080-41ba-11ea-876e-b516205629b7.png">
