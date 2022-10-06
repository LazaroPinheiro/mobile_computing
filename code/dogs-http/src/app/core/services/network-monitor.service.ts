import { Injectable } from "@angular/core";
import { networkConnectionTypeMonitoring } from "@app/helpers/utils/system.utils";
import { Connectivity } from "@nativescript/core";
import { distinctUntilChanged, map } from "rxjs";

@Injectable({ providedIn: 'root' })
export class NetworkMonitorService {
    private _hasNetworkConnection: boolean = true;

    constructor() {
        this.startMonitoring();
    }

    public get hasNetworkConnection(): boolean {
        return this._hasNetworkConnection;
    }
    
    public startMonitoring(): void {
        networkConnectionTypeMonitoring()
        .pipe(
            map((connectionType: number) => {
                return connectionType == Connectivity.connectionType.wifi || connectionType == Connectivity.connectionType.mobile || 
                connectionType == Connectivity.connectionType.ethernet || connectionType == Connectivity.connectionType.vpn;
            }),
            distinctUntilChanged(),
        ).subscribe((connectionStatus: boolean) => {
            this._hasNetworkConnection = connectionStatus;
        })
    }
}