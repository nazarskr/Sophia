import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) {
              }
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('http://localhost:3000/contact');
  }
  addContact(contact): Observable<{message: string}> {
    return this.http.post<{message: string}>('http://localhost:3000/contact', contact);
  }
}
