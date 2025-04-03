import type { Schema, Struct } from '@strapi/strapi';

export interface PeaceAtHomeComponentAbuseImage extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_abuse_images';
  info: {
    displayName: 'AbuseImage';
  };
  attributes: {
    caption: Schema.Attribute.String;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    webImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface PeaceAtHomeComponentFilterConstant
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_filter_constants';
  info: {
    description: '';
    displayName: 'FilterConstant';
  };
  attributes: {
    key: Schema.Attribute.String;
    label: Schema.Attribute.String;
    selected: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
  };
}

export interface PeaceAtHomeComponentMultiLineComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_multi_line_components';
  info: {
    description: '';
    displayName: 'MultilineComponent';
  };
  attributes: {
    Description: Schema.Attribute.Text &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
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

export interface PeaceAtHomeComponentNopeaceatHomemultilineimage
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_nopeaceat_homemultilineimages';
  info: {
    displayName: 'NopeaceatHomemultilineimage';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    webImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
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

export interface PeaceAtHomeComponentUsLawComponent
  extends Struct.ComponentSchema {
  collectionName: 'components_peace_at_home_component_us_law_components';
  info: {
    displayName: 'UsLawComponent';
  };
  attributes: {
    lawdescription: Schema.Attribute.Blocks;
    link: Schema.Attribute.Text;
    state: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'peace-at-home-component.abuse-image': PeaceAtHomeComponentAbuseImage;
      'peace-at-home-component.filter-constant': PeaceAtHomeComponentFilterConstant;
      'peace-at-home-component.multi-line-component': PeaceAtHomeComponentMultiLineComponent;
      'peace-at-home-component.multiline-rich-text-box': PeaceAtHomeComponentMultilineRichTextBox;
      'peace-at-home-component.multiline-with-image': PeaceAtHomeComponentMultilineWithImage;
      'peace-at-home-component.nopeaceat-homemultilineimage': PeaceAtHomeComponentNopeaceatHomemultilineimage;
      'peace-at-home-component.slider': PeaceAtHomeComponentSlider;
      'peace-at-home-component.slider-component': PeaceAtHomeComponentSliderComponent;
      'peace-at-home-component.textfield': PeaceAtHomeComponentTextfield;
      'peace-at-home-component.us-law-component': PeaceAtHomeComponentUsLawComponent;
    }
  }
}
