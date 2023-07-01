import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LeadsComponent } from './leads/leads.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { WebsiteContentComponent } from './website-content/website-content.component';

const routes: Routes = [
  {
  path:'',component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'services',component:ServicesComponent
  },
  {
    path:'products',component:ProductsComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'change-password',component:ChangePasswordComponent
  },
  {
    path:'website-content',component:WebsiteContentComponent
  },
  {
    path:'leads',component:LeadsComponent
  },
  {
    path:'logOut',component:LogoutComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
