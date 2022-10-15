import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '@app/core/models/activity';
import { CustomError } from '@app/core/models/custom-error';
import { ActivityNames } from '@app/helpers/enumerations/ActivityNames';
import { ErrorCode } from '@app/helpers/enumerations/ErrorCode';
import { environment } from '@env/environment';
import { catchError, lastValueFrom, map, throwError, timeout, TimeoutError } from 'rxjs';

/**
 * Bored API service.
 * Description: Service that requests the Bored API.
 */
@Injectable({ providedIn: 'root' })
export class BoredApiService {

    /**
     * Bored API service constructor.
     * @param {HttpClient} _httpClient Service that performs HTTP requests.
     */
    constructor(private _httpClient: HttpClient) {}

    /**
     * Fetches a random activity.
     * @returns {Activity} activity.
     */
    public fetchActivity(): Promise<Activity> {
        // Turns the Observable into a Promise.
        return lastValueFrom(
            this._httpClient.get< {
                activity: string,
                accessibility: number,
                type: string,
                participants: number,
                price: number,
                link: string
            } >(`${environment.theBored.apiUrl}/activity`)
            .pipe(
                 // Defines a deadline for request's lifetime
                timeout(1000),
                // Maps the input object data to the intended output object data.
                map(result => {
                    return <Activity> {
                        name: result.activity,
                        type: {
                            tag: result.type,
                            name: ActivityNames[(result.type.toUpperCase())]
                        },
                        participants: result.participants,
                        price: result.price,
                        accessibility: result.accessibility,
                        link: (result.link == '' ? null : result.link)
                    }
                }),
                // Catches errors that happen during the request.
                catchError((error) => {
                  let errorCode: ErrorCode = ErrorCode.UNEXPECTED_BEHAVIOUR;
                  let errorMessage: string = "Something went wrong while trying to make a request to bored api service.";
                  if(error instanceof TimeoutError) {
                        errorCode = ErrorCode.TIMEOUT;
                        errorMessage = "The request has timed out."
                    }
                    return throwError(() => new CustomError(errorCode, errorMessage));
                })
            )
        );
    }
}
