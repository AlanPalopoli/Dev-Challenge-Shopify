export interface RichTextInput {
  type: 'richtext';
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

export interface SectionSchema {
  text: TextInput;
  content: RichTextInput;
  color: ColorInput;
}