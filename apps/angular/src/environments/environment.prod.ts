import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'MyProject',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44335/',
    redirectUri: baseUrl,
    clientId: 'MyProject_App',
    responseType: 'code',
    scope: 'offline_access MyProject',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44376',
      rootNamespace: 'MyProject',
    },
  },
} as Environment;
