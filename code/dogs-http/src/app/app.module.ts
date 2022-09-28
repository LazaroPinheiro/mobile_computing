import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { AppRoutingModule } from '@app/app-routing.module'
import { AppComponent } from '@app/app.component'
import { NativeScriptModule } from '@nativescript/angular'
import { LandingComponent } from './features/landing/landing.component'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, AppRoutingModule],
  declarations: [AppComponent, LandingComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
