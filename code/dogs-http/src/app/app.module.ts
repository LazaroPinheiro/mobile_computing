import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { InputFieldModule } from '@app/core/components/input-field/input-field.module'
import { NoInternetScreenModule } from '@app/core/components/no-internet-screen/no-internet-screen.module'
import { ImageViewerComponent } from '@app/features/image-viewer/image-viewer.component'
import { LandingComponent } from '@app/features/landing/landing.component'
import { NativeScriptHttpClientModule, NativeScriptModule } from '@nativescript/angular'


@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule, InputFieldModule, 
    NativeScriptHttpClientModule, NoInternetScreenModule],
  declarations: [AppComponent, LandingComponent, ImageViewerComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
