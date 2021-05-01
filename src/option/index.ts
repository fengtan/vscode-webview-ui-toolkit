import {customElement, ElementStyles} from '@microsoft/fast-element';
import {
	ListboxOption,
	ListboxOptionTemplate as template,
} from '@microsoft/fast-foundation';
import {OptionStyles as styles} from './option.styles';

/**
 * The VS Code Option element. Extends
 * {@link https://www.fast.design/docs/api/fast-foundation.listboxoption/ | ListboxOption} and
 * {@link https://www.fast.design/docs/api/fast-foundation.listboxoptiontemplate/ | ListboxOptionTemplate}.
 *
 * @remarks
 * HTML Element: `<vscode-option>`
 *
 * @public
 */
@customElement({
	name: 'vscode-option',
	template,
	styles,
})
export class VSCodeOption extends ListboxOption {}

/**
 * Styles for the VS Code Option component
 * @public
 */
export const OptionStyles: ElementStyles = styles;
