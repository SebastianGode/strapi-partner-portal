import type { Schema, Attribute } from '@strapi/strapi';

export interface GeneralHeaderDescription extends Schema.Component {
  collectionName: 'components_general_header_descriptions';
  info: {
    displayName: 'header_description';
    icon: 'collapse';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'general.header-description': GeneralHeaderDescription;
    }
  }
}
