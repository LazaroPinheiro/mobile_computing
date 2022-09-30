import { Component } from '@angular/core';
import MyHttpStatusCode from '@app/helpers/enumerations/MyHttpStatusCode';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	moduleId: module.id,
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent {
	statusCode: number;
	enteredStatusCode: number;
	error: string = " ";

	constructor(private _routerExtensions: RouterExtensions) { }

	public goBack(): void {
		this._routerExtensions.back();
	}

	public newStatusCodeEntered(statusCode: number): void {
		if(this.error !== " ") this.error = " ";
		this.enteredStatusCode = statusCode;
	}

	public fetchStatusCodeImage(): void {
		if(!(this.enteredStatusCode in MyHttpStatusCode)) {
			this.error = "Invalid HTTP status code entered.";
		} else {
			this.statusCode = this.enteredStatusCode;
		}
	}
}