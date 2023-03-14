import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { environment } from 'src/environments/environment.development'; 
import { Contact } from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  putContact(contact: Contact, id: number): Observable<any> {
    return this.http.put(
      `${this.url}/contacts/${id}`,
      { contact }
    );
  }

  getContact(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/users/${id}`);
  }

  getContactList(): Observable<Contact[]> {
    return this.http.get<any>(`${this.url}/contacts`);
  }
  createContact(contact: Contact): Observable<any> {
    return this.http.post(
      `${this.url}/contacts`,
      {contact}
    );
  }


}
