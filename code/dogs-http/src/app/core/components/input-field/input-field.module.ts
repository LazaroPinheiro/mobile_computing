import { CommonModule } from "@angular/common";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NativeScriptCommonModule, NativeScriptFormsModule } from "@nativescript/angular";
import { NumericInputFieldComponent } from "./numeric-input-field/numeric-input-field.component";

/**
 * Input field module.
 * Note: Built to be used easily on any screen.
 */
@NgModule({
    imports: [NativeScriptCommonModule, CommonModule, ReactiveFormsModule, FormsModule, NativeScriptFormsModule],
    declarations: [NumericInputFieldComponent],
    exports: [NumericInputFieldComponent],
    schemas:[NO_ERRORS_SCHEMA],
})

export class InputFieldModule {}
