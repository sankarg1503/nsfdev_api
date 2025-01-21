import type { Schema, Struct } from '@strapi/strapi';

export interface TileTipsTips extends Struct.ComponentSchema {
  collectionName: 'components_tile_tips_tips';
  info: {
    displayName: 'tips';
  };
  attributes: {
    tips: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tile-tips.tips': TileTipsTips;
    }
  }
}
