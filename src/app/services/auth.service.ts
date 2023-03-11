import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Observer} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment.development'; 
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = environment.apiUrl;
  constructor(private http: HttpClient) { }
  
  signInUser(email: string, password: string): Observable<boolean> {
    return new Observable((observer) => {
   let observable =  this.getUserList()
   observable.subscribe((data: User[]) =>{
    let user = data.filter((user)=>{
     return  user.email === email &&  user.password === password
    })
    if(user.length>0){
      localStorage.setItem('userActive', 'ok');
      localStorage.setItem('userId', `${user[0].id}`);
      localStorage.setItem('email', `${user[0].email}`);
      observer.next(true)
    }else{
      observer.next(false)
    }
    });
    })
  }
  isConnected(): boolean {
    // const token = this.getToken();
    return localStorage.getItem('userActive')== 'ok' ? true: false;
  }
  putUser(supplier: number, id: number): Observable<any> {
    return this.http.put(
      `${this.url}/users/${id}`,
      { supplier }
    );
  }

  getUser(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/users/${id}`);
  }

  getUserList(): Observable<User[]> {
    return this.http.get<any>(`${this.url}/users`);
  }
  createUser(user: User): Observable<any> {
    return this.http.post(
      `${this.url}/users`,
      {user}
    );
  }
}
