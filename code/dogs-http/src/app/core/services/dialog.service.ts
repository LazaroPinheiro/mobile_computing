import { Injectable } from "@angular/core";
import { Dialogs } from "@nativescript/core";

/**
 * Service that is responsible for displaying the dialogs.
 */
@Injectable({ providedIn: 'root' })
export class DialogService {

    /**
     * Shows a dialog with just one button. Designed to display information, usually errors, that the user should be aware of.
     * @param {string} title Dialog title.
     * @param {string} message Dialog message.
     * @param {string} buttonText Button text.
     * @returns {void}
     */
    public showSimple(title: string, message: string, buttonText: string): Promise<void> {
        return Dialogs.alert({
            title: title,
            message: message,
            okButtonText: buttonText,
        })
    }
}