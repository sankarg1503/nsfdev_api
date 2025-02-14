import type { Schema, Struct } from '@strapi/strapi';

export interface PeaceAtHomeComponentMultiLineComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_multi_line_components';
  info: {
    description: '';
    displayName: 'MultilineComponent';
  };
  attributes: {
    Description: Schema.Attribute.Text;
  };
}

export interface PeaceAtHomeComponentMultilineRichTextBox
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_multiline_rich_text_boxes';
  info: {
    displayName: 'MultilineRichTextBox';
  };
  attributes: {
    multilinerichtextbox: Schema.Attribute.Blocks;
  };
}

export interface PeaceAtHomeComponentMultilineWithImage
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_multiline_with_images';
  info: {
    displayName: 'MultilineWithImage';
  };
  attributes: {
    DescriptionMobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    DescriptionTitle: Schema.Attribute.String;
    DescriptionWebImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Desctiption: Schema.Attribute.Blocks;
  };
}

export interface PeaceAtHomeComponentSlider extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_sliders';
  info: {
    description: '';
    displayName: 'slider';
  };
  attributes: {
    sliderContent: Schema.Attribute.Component<
      'peace-at-home-component.slider-component',
      true
    >;
    title: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
  };
}

export interface PeaceAtHomeComponentSliderComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_slider_components';
  info: {
    displayName: 'SliderComponent';
  };
  attributes: {
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    slidercontent: Schema.Attribute.Blocks;
    webImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PeaceAtHomeComponentTextfield extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_textfields';
  info: {
    displayName: 'textfield';
  };
  attributes: {
    textContent: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'peace-at-home-component.multi-line-component': PeaceAtHomeComponentMultiLineComponent;
      'peace-at-home-component.multiline-rich-text-box': PeaceAtHomeComponentMultilineRichTextBox;
      'peace-at-home-component.multiline-with-image': PeaceAtHomeComponentMultilineWithImage;
      'peace-at-home-component.slider': PeaceAtHomeComponentSlider;
      'peace-at-home-component.slider-component': PeaceAtHomeComponentSliderComponent;
      'peace-at-home-component.textfield': PeaceAtHomeComponentTextfield;
    }
  }
}
