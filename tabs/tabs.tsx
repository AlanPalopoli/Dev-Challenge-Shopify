import { Fragment, h, render } from 'preact';
import { SectionSchema } from './schema';

interface TabsProps {
    section: {
        settings: SectionSchema['settings'];
        blocks: SectionSchema['blocks'];
    };
}

function Tabs({ section }: TabsProps) {
    return (
        <div className="tabs" data-section-settings={JSON.stringify(section.blocks)} data-section-blocks={JSON.stringify(section.blocks)}>
          <div class="tabs__container flex gap-2">
            
          {section.blocks.map((block, index) => (
              <button
                class="border rounded-md p-2"
                /* onClick={() => showTabText( `tab${index}`)} */
                onClick={() => console.log( "clicked", `tab${index}`)}
                style="background-color: {{ block.settings.tab_color }};"
                key={index}>
                { block.settings.tab_title }
              </button>
            ))}
          </div>

          {section.blocks.map((block, index) => (
            <div id={`tab${index}`} class="tab hidden" key={index}>
              { block.settings.tab_content }
            </div>
          ))}
        </div>
    );
}

const sectionData = document.querySelector('.tabs-section') as HTMLElement;
const container = document.querySelector('#container-app') as HTMLElement;

console.log(sectionData, "Section data");
console.log(sectionData.dataset, "Dataset");
console.log(sectionData.dataset.sectionSettings, "Section Settings dataset");
console.log(sectionData.dataset.sectionBlocks, "Section Blocks dataset");
if (sectionData?.dataset) {
    const settings = JSON.parse(sectionData.dataset.sectionSettings || '{}');
    const blocks = JSON.parse(sectionData.dataset.sectionBlocks || '[]');

    render(<Tabs section={{ settings, blocks }} />, container);
}
