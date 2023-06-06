export interface RichTextInput {
  type: 'textarea';
  label: string;
  default?: "Tab Content";
}

export interface TextInput {
  type: 'text';
  label: string;
  default?: string;
}

export interface ColorInput {
  type: 'color';
  label: string;
  default?: string;
}

export interface Blocks {
  type: string;
  settings: {
    [key: string]: TextInput | RichTextInput | ColorInput
  };
}

export interface SectionSchema {
  settings: {
    [key: string]: TextInput | RichTextInput | ColorInput
  };
  blocks: Blocks[];
}