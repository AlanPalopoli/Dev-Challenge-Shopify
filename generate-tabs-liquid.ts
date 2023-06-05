import { readFileSync, writeFileSync } from 'fs';
import { SectionSchema } from './tabs/schema';

function generateLiquid(schema: SectionSchema, content: string, jsFile: string) {
    const jsContent = readFileSync(jsFile, 'utf-8');

    const liquid = `
    {% schema %}
    {
      "name": "Tabs",
      "settings": [],
      "blocks": [
        {
          "type": "tab",
          "name": "Tab",
          "settings": [
            {
              "id": "tab_title",
              "type": "text",
              "label": "${schema.text.label}",
              "default": "${schema.text.default || 'Default tab text'}"
            },
            {
              "id": "tab_content",
              "type": "richtext",
              "label": "${schema.content.label}"
            },
            {
              "id": "tab_color",
              "type": "color",
              "label": "${schema.color.label}",
              "default": "${schema.color.default || '#000000'}"
            }
          ]
        }
      ],
      "presets": []
    }
    {% endschema %}
    ${content}
    <script>${jsContent}</script>
  `;

    const outputPath = './theme/sections/tabs.liquid';
    writeFileSync(outputPath, liquid);
    console.log(`Generated ${outputPath}`);
}

const schema: SectionSchema = {
    text: { type: 'text', label: 'Tab Title' },
    content: { type: 'richtext', label: 'Tab Content' },
    color: { type: 'color', label: 'Tab Color' }
};

const content = readFileSync('./tabs/content.liquid', 'utf-8');
const jsFile = './tabs/tabs.vanilla.js';

generateLiquid(schema, content, jsFile);