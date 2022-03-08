import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeviceAndAppComponent } from './device-and-app/device-and-app.component';
import { ScientificValidationComponent } from './scientific-validation/scientific-validation.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'home', component: HomeComponent},
  { path: 'deviceApp', component: DeviceAndAppComponent},
  { path: 'scientificValidation', component: ScientificValidationComponent},
  { path: 'aboutUs', component: AboutUsComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    AboutUsComponent,
    DeviceAndAppComponent,
    ScientificValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
