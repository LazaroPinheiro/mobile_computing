import { Component, OnInit } from '@angular/core';
import { Activity } from '@app/core/models/activity';
import { ActivityStorageService } from '@app/core/services/activity-storage.service';
import { BoredApiService } from '@app/core/services/bored-api.service';
import { ErrorProcessorService } from '@app/core/services/error-processor.service';
import { RouterExtensions } from '@nativescript/angular';
import { Utils } from '@nativescript/core';

@Component({
	moduleId: module.id,
	selector: 'activity-suggester',
	templateUrl: './activity-suggester.component.html',
	styleUrls: ['./activity-suggester.component.css']
})

export class ActivitySuggesterComponent implements OnInit {
	isLoading: boolean = false; 
	activity: Activity;

	constructor(private _routerExtensions: RouterExtensions, private _boredApiService: BoredApiService, 
		private _activityStorageService: ActivityStorageService, private _errorProcessorService: ErrorProcessorService) {}
		
	ngOnInit(): void {
		this.isLoading = true;
		this.activity = this._activityStorageService.get();
		this.isLoading = false;
	}

	goBack(): void {
		this._routerExtensions.back();
	}

	goToActivityLink(): void {
		Utils.openUrl(this.activity.link);
	}

	fetchActivity(): void {
		this.isLoading = true;
		this._boredApiService.fetchActivity()
		.then((activity: Activity) => {
			this.activity = activity;
			this._activityStorageService.put(activity);
		}).catch((error: Error) => {
			this._errorProcessorService.processError(error);
		})
		.finally(() => {
			this.isLoading = false;
		})
	}
}