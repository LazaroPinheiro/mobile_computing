import { Component, ViewChild } from '@angular/core';
import { NumericInputFieldComponent } from '@app/core/components/input-field/numeric-input-field/numeric-input-field.component';
import MyHttpStatusCode from '@app/helpers/enumerations/MyHttpStatusCode';
import { environment } from '@env/environment';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	moduleId: module.id,
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent {
	@ViewChild('numericInputField')
	private numericInputField: NumericInputFieldComponent;
	
	apiUrl: string = environment.dogsHttp.apiUrl;
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