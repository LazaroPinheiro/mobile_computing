import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity } from '@app/core/models/activity';
import { CustomError } from '@app/core/models/custom-error';
import { ActivityNames } from '@app/helpers/enumerations/ActivityNames';
import { ErrorCode } from '@app/helpers/enumerations/ErrorCode';
import { environment } from '@env/environment';
import { catchError, lastValueFrom, map, throwError, timeout, TimeoutError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BoredApiService {
    
    constructor(private _httpClient: HttpClient) {}   

    public fetchActivity(): Promise<Activity> {
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
                timeout(1000),    
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
                catchError((error) => {
                    var errorCode: ErrorCode = ErrorCode.UNEXPECTED_BEHAVIOUR;
                    var errorMessage: string = "Something went wrong while trying to make a request to bored api service.";
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