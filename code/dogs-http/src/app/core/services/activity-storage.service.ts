import { Injectable } from "@angular/core";
import { Activity } from "@app/core/models/activity";
import * as AppSettings from '@nativescript/core/application-settings';

/**
 * Activity storage service.
 * Description: Service that stores the last activity shown.
 */

@Injectable({ providedIn: 'root' })
export class ActivityStorageService {
    private readonly itemName: string = "#Act1v1t9$";

    /**
     * Save activity.
     * @param {Activity} activity activity to store. 
     */
    public put(activity: Activity): void {
        AppSettings.setString(this.itemName, JSON.stringify(activity));
    }

    /**
     * Gets the saved activity.
     * @returns {Activity} saved activity.
     */
    public get() : Activity | null {
        const item = AppSettings.getString(this.itemName);
        return item ? <Activity>JSON.parse(item) : null;
    }
}
