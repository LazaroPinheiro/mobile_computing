import { Injectable } from "@angular/core";
import * as AppSettings from '@nativescript/core/application-settings';
import { Activity } from "../models/activity";

@Injectable({ providedIn: 'root' })
export class ActivityStorageService {
    private readonly itemName: string = "#Act1v1t9$";

    public put(activity: Activity): void {
        AppSettings.setString(this.itemName, JSON.stringify(activity));
    }

    public get() : Activity | null {
        const item = AppSettings.getString(this.itemName);
        return item ? <Activity>JSON.parse(item) : null;
    }
}
