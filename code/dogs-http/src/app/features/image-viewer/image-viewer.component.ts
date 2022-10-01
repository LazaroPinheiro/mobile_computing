import { Component, ViewChild } from '@angular/core';
import MyHttpStatusCode from '@app/helpers/enumerations/MyHttpStatusCode';
import { RouterExtensions } from '@nativescript/angular';
import { NumericInputFieldComponent } from '../../core/components/input-field/numeric-input-field/numeric-input-field.component';

@Component({
	moduleId: module.id,
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent {
	@ViewChild('numericInputField')
	private numericInputField: NumericInputFieldComponent;
	
	statusCode: number;
	enteredStatusCode: number;
	error: string = " ";

	constructor(private _routerExtensions: RouterExtensions) { }

	goBack(): void {
		this._routerExtensions.back();
	}

	newStatusCodeEntered(statusCode: number): void {
		if(this.error !== " ") this.error = " ";
		this.enteredStatusCode = statusCode;
	}

	fetchStatusCodeImage(): void {
		if(!(this.enteredStatusCode in MyHttpStatusCode)) {
			this.error = "Invalid HTTP status code entered.";
		} else {
			this.statusCode = this.enteredStatusCode;
		}
	}

	onDismissInputFieldKeyboard(): void {
		this.numericInputField.onFieldBlur();
	}
}