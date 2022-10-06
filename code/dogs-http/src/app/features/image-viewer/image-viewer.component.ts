import { Component, ViewChild } from '@angular/core';
import { NumericInputFieldComponent } from '@app/core/components/input-field/numeric-input-field/numeric-input-field.component';
import MyHttpStatusCode from '@app/helpers/enumerations/MyHttpStatusCode';
import { environment } from '@env/environment';
import { RouterExtensions } from '@nativescript/angular';

/**
 * Image viewer component.
 */
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

	/**
	 * Image viewer component constructor.
	 * @param {RouterExtensions} _routerExtensions router extensions that allows navigation.
	 */
	constructor(private _routerExtensions: RouterExtensions) { }

	/**
	 * Navigates to previous route.
	 */
	goBack(): void {
		this._routerExtensions.back();
	}

	/**
	 * Notified when the text value of the input field changes.
	 * When a new digit of a status code is entered or removed.
	 * @param {number} statusCode status code entered.
	 */
	newStatusCodeEntered(statusCode: number): void {
		if(this.error !== " ") this.error = " ";
		this.enteredStatusCode = statusCode;
	}

	/**
	 * Gets the image corresponding to the entered status code.
	 */
	fetchStatusCodeImage(): void {
		if(!(this.enteredStatusCode in MyHttpStatusCode)) {
			this.error = "Invalid HTTP status code entered.";
		} else {
			this.statusCode = this.enteredStatusCode;
		}
	}

	/**
	 * Performed on input field blur.
	 */
	onDismissInputFieldKeyboard(): void {
		this.numericInputField.onFieldBlur();
	}
}