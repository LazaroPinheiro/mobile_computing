import { Connectivity } from "@nativescript/core";
import { distinctUntilChanged, Observable, Subscriber } from "rxjs";

/**
 * Monitoring device connection types to the network.
 * For more info, check: https://docs.nativescript.org/connectivity.html#connectivity
 * @returns {number} Connection type.
 */
 export const networkConnectionTypeMonitoring = (): Observable<number> => {
    return new Observable<number>((observer: Subscriber<number>) => {
        Connectivity.startMonitoring((connectionType: number) => {
            observer.next(connectionType);
        });

        return () => Connectivity.stopMonitoring();
    }).pipe(
        distinctUntilChanged()
    )
};
