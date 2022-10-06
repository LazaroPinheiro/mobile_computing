import { Injectable } from "@angular/core";
import { ErrorCode } from "../../helpers/enumerations/ErrorCode";
import { DialogService } from "../services/dialog.service";


@Injectable({ providedIn: 'root' })
export class ErrorProcessorService {
    constructor(private _dialogsService: DialogService) {}

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