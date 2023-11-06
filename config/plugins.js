module.exports = ({ env }) => ({
    'strapi-plugin-sso': {
        enabled: true,
        config: {
            // Keycloak
            KEYCLOAK_DOMAIN: 'https://keycloak.strapi.schreiber-ling.de',
            KEYCLOAK_REALM:  'master',
            KEYCLOAK_CLIENT_ID: 'ACBD12345',
            KEYCLOAK_CLIENT_SECRET:'nJwXQadPRL1olXTqBa6g9R00sUqpGJ1t',
            KEYCLOAK_REDIRECT_URI: 'https://strapi.schreiber-ling.de/strapi-plugin-sso/keycloak/callback', // URI after successful login
            KEYCLOAK_STRAPI_SUPER_ADMIN_ROLE: 'strapi.super_admin',
            KEYCLOAK_STRAPI_EDITOR_ROLE: 'strapi.editor',
            KEYCLOAK_STRAPI_AUTHOR_ROLE: 'strapi.author',
        },
    },
});