import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
	moduleId: module.id,
	selector: 'image-viewer',
	templateUrl: './image-viewer.component.html',
	styleUrls: ['./image-viewer.component.css']
})

export class ImageViewerComponent {
	constructor(private _routerExtensions: RouterExtensions) { }

	public goBack(): void {
		this._routerExtensions.back();
	}

	p
}