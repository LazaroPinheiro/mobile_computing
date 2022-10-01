import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EventData, TextField } from '@nativescript/core';

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

	onFieldLoaded(args: EventData) {
        this.textField = args.object as TextField;
    }

	onFieldTextChange(evt: any) {
        this.textChange.emit(evt.object.text);
    }

	onFieldBlur(): void {
		this.textField.dismissSoftInput();
	}
}