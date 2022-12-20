import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/contact/admin', pathMatch: 'full'
  },
  // path for ContactManagerComponent
  {
    path: 'contact/admin', component: ContactManagerComponent
  },
  //path for AddContactComponent
  {
    path: 'contact/add', component: AddContactComponent
  },
  // for differnt users account creation  /:any-unique-value 
  {
    path:'contact/edit/:contactId',component:UpdateContactComponent
  },
  {
    path:'contact/view/:contactId', component:ViewContactComponent
  },
  // page not found item
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
