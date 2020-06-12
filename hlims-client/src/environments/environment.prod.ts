export const environment = {
  production: true,
  endpoints: {
    // api: 'https://localhost:44378/api/'
    api: 'https://homeloaninsurance.azurewebsites.net/api/'
  },
  auth: {
    baseUrl: 'http://localhost:58980/',
    scopeUri: ['api://a32f0791-42d1-4bdb-8afc-b0db1fd82d75/api.consume'],
    tenantId: 'b8cc1b6e-762a-4f0b-9a3f-d134b19d7a44',
    uiClienId: '6ae41d19-dca6-492d-b0ea-58dba7bd97a4',
    redirectUrl: 'http://localhost:4200'
  }
};
