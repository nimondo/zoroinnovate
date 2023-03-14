import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactRoutingModule } from './contact-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddContactComponent } from './add-contact/add-contact.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    SidebarComponent,
    AddContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule, HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContactModule { }
