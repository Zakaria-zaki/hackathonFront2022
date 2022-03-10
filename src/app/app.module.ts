import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DeviceAndAppComponent } from './device-and-app/device-and-app.component';
import { ScientificValidationComponent } from './scientific-validation/scientific-validation.component';
import {AuthModule} from "./auth/auth.module";
import {AdminModule} from "./admin/admin.module";
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'deviceApp', component: DeviceAndAppComponent},
  { path: 'scientificValidation', component: ScientificValidationComponent},
  { path: 'aboutUs', component: AboutUsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    DeviceAndAppComponent,
    ScientificValidationComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    AdminModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
