import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {LoginComponent} from "./login/login.component";
import {HomeComponent} from "./home/home.component";
import {DeviceAndAppComponent} from "./device-and-app/device-and-app.component";
import {ScientificValidationComponent} from "./scientific-validation/scientific-validation.component";
import {AboutUsComponent} from "./about-us/about-us.component";
import {RegisterComponent} from "./auth/components/register/register.component";
import {AdminModule} from "./admin/admin.module";
import {AdminPageComponent} from "./admin-page/admin-page.component";

const routes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'home', component: HomeComponent },
  { path: 'deviceApp', component: DeviceAndAppComponent },
  { path: 'scientificValidation', component: ScientificValidationComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
