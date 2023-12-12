// config/plugins.js
module.exports = ({env}) => ({
  'strapi-plugin-sso': {
    enabled: true,
    config: {
      // Google
      GOOGLE_OAUTH_CLIENT_ID: '[Client ID created in GCP]',
      GOOGLE_OAUTH_CLIENT_SECRET: '[Client Secret created in GCP]',
      GOOGLE_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/google/callback', // URI after successful login
      GOOGLE_ALIAS: '', // Gmail Aliases
      GOOGLE_GSUITE_HD: '', // G Suite Primary Domain

      // Cognito
      COGNITO_OAUTH_CLIENT_ID: '[Client ID created in AWS Cognito]',
      COGNITO_OAUTH_CLIENT_SECRET: '[Client Secret created in AWS Cognito]',
      COGNITO_OAUTH_DOMAIN: '[OAuth Domain created in AWS Cognito]',
      COGNITO_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/cognito/callback', //  // URI after successful login
      COGNITO_OAUTH_REGION: 'ap-northeast-1', // AWS Cognito Region

      // AzureAD
      AZUREAD_OAUTH_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/azuread/callback',
      AZUREAD_TENANT_ID: '[Tenant ID created in AzureAD]',
      AZUREAD_OAUTH_CLIENT_ID: '[Client ID created in AzureAD]', // [Application (client) ID]
      AZUREAD_OAUTH_CLIENT_SECRET: '[Client Secret created in AzureAD]',
      AZUREAD_SCOPE: 'user.read', // https://learn.microsoft.com/en-us/graph/permissions-reference

      // OpenID Connect
      OIDC_REDIRECT_URI: 'http://localhost:1337/strapi-plugin-sso/oidc/callback', // URI after successful login
      OIDC_CLIENT_ID: '[Client ID from OpenID Provider]',
      OIDC_CLIENT_SECRET: '[Client Secret from OpenID Provider]',

      OIDC_SCOPES: 'openid profile email', // https://oauth.net/2/scope/
      // API Endpoints required for OIDC
      OIDC_AUTHORIZATION_ENDPOINT: '[API Endpoint]',
      OIDC_TOKEN_ENDPOINT: '[API Endpoint]',
      OIDC_USER_INFO_ENDPOINT: '[API Endpoint]',
      OIDC_USER_INFO_ENDPOINT_WITH_AUTH_HEADER: false,
      OIDC_GRANT_TYPE: 'authorization_code', // https://oauth.net/2/grant-types/
      // customizable username arguments
      OIDC_FAMILY_NAME_FIELD: 'family_name',
      OIDC_GIVEN_NAME_FIELD: 'given_name',
    }
  }
})
