import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "@nativescript/angular";
import { NoInternetScreenComponent } from "./no-internet-screen.component";

/**
 * No internet screen module.
 */
@NgModule({
    imports: [NativeScriptCommonModule, CommonModule],
    declarations: [NoInternetScreenComponent],
    exports:[NoInternetScreenComponent], 
    schemas:[NO_ERRORS_SCHEMA],
})
export class NoInternetScreenModule {}