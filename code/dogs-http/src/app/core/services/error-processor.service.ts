import { Injectable } from "@angular/core";
import { DialogService } from "@app/core/services/dialog.service";
import { ErrorCode } from "@app/helpers/enumerations/ErrorCode";

/**
 * Error processor service.
 * Description: Adopting this strategy, all error processing is centralized, making it easy to read and understand. 
 *              Error handling is always for a certain type of error.
 */
@Injectable({ providedIn: 'root' })
export class ErrorProcessorService {
    /**
     * Error processoor service constructor.
     * @param {DialogService} _dialogsService Service that allows to display error message.
     */
    constructor(private _dialogsService: DialogService) {}

    /**
     * Error processor.
     * @param {Error} error occurred error.
     */
    public processError(error: Error) : void {
        console.error(error);

        switch(error.name) {
            case ErrorCode.TIMEOUT: 
                this._dialogsService.showSimple("Error", "The request made didn't receive a timely response.", "Ok");
                break;
            case ErrorCode.UNEXPECTED_BEHAVIOUR:
            default:
                this._dialogsService.showSimple("Error", "Something unexpected has occurred. Try again.", "Ok");
                break;
        }
    }
}