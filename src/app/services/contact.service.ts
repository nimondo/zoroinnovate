import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  putContact(supplier: number, id: number): Observable<any> {
    return this.http.put(
      `/api/fulldigital/orders/${id}/supplier`,
      { supplier }
    );
  }

  getContact(order: number): Observable<any> {
    return this.http.get<any>(`/api/fulldigital/quotes/catalogue/${order}/order-suppliers`);
  }

  getContactList(): Observable<Contact[]> {
    return this.http.get<any>(`/api/fulldigital/quotes/suppliers-list`);
  }
  createContact(contact: Contact): Observable<any> {
    return this.http.post(
      `/api/fulldigital/quotes/${contact.id}/remote-instruction`,
      {}
    );
  }


}
