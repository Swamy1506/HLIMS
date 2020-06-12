// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoints: {
    // api: 'https://localhost:44378/api/'
    api: 'https://homeloaninsurance.azurewebsites.net/api/'
  },
  auth: {
    // clientId: '6ae41d19-dca6-492d-b0ea-58dba7bd97a4',
    // tenantId: 'b8cc1b6e-762a-4f0b-9a3f-d134b19d7a44',
    // redirectUri: 'http://localhost:4200',
    // baseUrl: 'http://localhost:58980/',
    // scopeUri: ['api://a32f0791-42d1-4bdb-8afc-b0db1fd82d75/api.consume'],
    // tenantId: 'b8cc1b6e-762a-4f0b-9a3f-d134b19d7a44',
    // uiClienId: '6ae41d19-dca6-492d-b0ea-58dba7bd97a4',
    // redirectUrl: 'http://localhost:4200'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
