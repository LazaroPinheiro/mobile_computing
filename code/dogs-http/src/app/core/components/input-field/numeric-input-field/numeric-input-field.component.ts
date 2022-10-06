import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventData, TextField } from '@nativescript/core';

/**
 * Numeric input field component.
 */
@Component({
	moduleId: module.id,
	selector: 'numeric-input-field',
	templateUrl: './numeric-input-field.component.html',
	styleUrls: ['./numeric-input-field.component.css']
})

export class NumericInputFieldComponent {
    @Input() hint = "";
    @Input() maxLength: number = Number.POSITIVE_INFINITY;
	@Input() error: string = "";
	
	@Output() textChange = new EventEmitter<number>();

    private textField: TextField;

	/**
	 * Action to be performed when the text input field is loaded.
	 * @param {EventData} args arguments
	 */
	onFieldLoaded(args: EventData): void {
        this.textField = args.object as TextField;
    }

	/**
	 * Action to be performed when the text value of the text field is changed.
	 * @param evt event 
	 */
	onFieldTextChange(evt: any): void {
        this.textChange.emit(evt.object.text);
    }

	/**
	 * Action to take to blur text input field.
	 */
	onFieldBlur(): void {
		this.textField.dismissSoftInput();
	}
}