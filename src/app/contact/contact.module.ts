import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ContactRoutingModule } from './contact-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './sidebar/sidebar.component';




@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule, HttpClientModule
  ]
})
export class ContactModule { }
