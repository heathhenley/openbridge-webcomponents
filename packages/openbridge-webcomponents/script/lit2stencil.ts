import * as fs from 'fs';

function convertComponent({name, folder}: {name: string, folder: string}): void {
    // New name is obc-<name>, name is made dash case from camel case
    const newName = "obc-" + name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    if (['obc-icon', 'obc-tooltip'].includes(newName)) {
        return;
    }

    let component = fs.readFileSync(`./src/${folder}/${name}.ts`, 'utf8');
    // remove import
    component = component.replace(/import .* from 'lit'/g, '');
    component = component.replace(/import .* from 'lit\/decorators.js'/g, '');
    component = component.replace(/import .* from 'lit\/element.js'/g, '');

    // add import
    const items = ["Component"]
    if (component.match('property')) {
        items.push("Prop");
    }
    if (component.match('state')) {
        items.push("State");
    }
    if (component.match('query')) {
        items.push("Element");
    }


    component = `import { ${items.join(", ")} } from '@stencil/core';\n` + component;


    // Replace @customElement with @Component
    component = component.replace(/@customElement\(.*?\)/, '@Component({ tag: \'' + newName + '\', shadow: true, styleUrl: ' + `'${newName}.css'` + ' })');
    // Replace @property with @Prop
    component = component.replace(/@property\(.*?\)/g, '@Prop()');
    // Replace @query with @Element
    component = component.replace('@query', '@Element');
    // Replace @queryAll with @Element
    component = component.replace('@queryAll', '@Element');
    // Replace @eventOptions with @Event
    component = component.replace('@eventOptions', '@Event');
    // Replace @internalProperty with @State
    component = component.replace('@internalProperty', '@State');
    // Replace @state with @State
    component = component.replace(/@state/g, '@State');
    // Replace @queryAsync with @Element
    component = component.replace('@queryAsync', '@Element');
    // Replace @queryAssignedNodes with @Element
    component = component.replace('@queryAssignedNodes', '@Element');
    // Replace export class OpenbridgeWebcomponents extends LitElement { with export class OpenbridgeWebcomponents {
    component = component.replace(`export class ${name} extends LitElement {`, `export class ${name} {`);
    // Replace super() with constructor() {
    component = component.replace('super();', 'constructor() {');
    // Replace this.render() with render() {
    component = component.replace('render() {', 'render() {');
    // Replace this.requestUpdate() with this.componentWillLoad()
    component = component.replace('this.requestUpdate();', 'this.componentWillLoad();');
    // Replace this.updateComplete with this.componentDidLoad
    component = component.replace('this.updateComplete;', 'this.componentDidLoad();');
    // Replace this.shadowRoot with this.el.shadowRoot
    component = component.replace('this.shadowRoot', 'this.el.shadowRoot');

    // remove  static styles = unsafeCSS(compentStyle);
    component = component.replace(/static styles = unsafeCSS\(.*?\);*?/g, '');

    // remove import compentStyle from "./AlertButton.css?inline";
    component = component.replace(/import .* from ".*?.css\?inline";/g, '');
    // remove import "../icon/Icon"
    component = component.replace(/import "..\/icon\/Icon"/g, '');
  
    // Replace html with h
    component = component.replace(/html\`/g, '`');
    // Replace css with css
    component = component.replace(/css\`/g, 'css`');

    component = component.replace(/ob-/g, 'obc-');

    // remove declare global {
    // interface HTMLElementTagNameMap {
     // 'obc-brilliance-menu': BrillianceMenu
    // }
    //}
    component = component.replace(/declare global {[\s\S]*}/g, '');

    // create the folder if it doesn't exist
    const genFolder = `../openbridge-webcomponents-stencil/src/components/${newName}`;

    if (!fs.existsSync(genFolder)) {
        fs.mkdirSync(genFolder);
    }
    // write the file
    fs.writeFileSync(`${genFolder}/${newName}.tsx`, component);

    // copy the css file if it exists
    if (fs.existsSync(`./src/${folder}/${name}.css`))
        fs.copyFileSync(`./src/${folder}/${name}.css`, `${genFolder}/${newName}.css`);

    // copy the stories file if it exists
    if (fs.existsSync(`./src/${folder}/${name}.stories.ts`)) {
        let stories = fs.readFileSync(`./src/${folder}/${name}.stories.ts`, 'utf8');
        // replace import import { Tooltip, TooltipVariant } from './Tooltip';
        stories = stories.replace(new RegExp(`import (.*) from '.\/${name}';`, 'g'), `import $1 from './${newName}';`);
        // remove import of component
        stories = stories.replace(`import './${name}';`, '');
        // replace import { iconIds } from '../icons';
        stories = stories.replace(`import { iconIds } from '../icons';`, `import { ICONS_IDS } from '../../icons';`);
        // replace iconIds with ICONS_IDS
        stories = stories.replace(/iconIds/g, 'ICONS_IDS');
        // remove import "../icon/Icon";
        stories = stories.replace(`import "../icon/Icon";`, '');
        // remove import '../icon/Icon';
        stories = stories.replace(`import '../icon/Icon';`, '');
        // save the file
        fs.writeFileSync(`${genFolder}/${newName}.stories.ts`, stories);
    }
}

function getAllComponents():  {folder: string, name: string}[] {
    const folders = fs.readdirSync('./src').filter(file => fs.statSync(`./src/${file}`).isDirectory());
    const components: {folder: string, name: string}[] = [];
    for (const folder of folders) {
        const comp = fs.readdirSync(`./src/${folder}`).filter(file => file.endsWith('.ts') && file.endsWith('.stories.ts') === false);
        for (const name of comp) {
            let nameWithoutExtension = name.replace('.ts', '');
            components.push({folder, name:nameWithoutExtension});
        }
    }
    return components;
}

function main() {
    const components = getAllComponents();
    for (const component of components) {
        console.log(`Converting ${component.folder}/${component.name}`);
        convertComponent(component);
    }
}

main();