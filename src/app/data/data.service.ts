import { Injectable } from '@angular/core';
import { UserSettings } from './user-settings';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postUserSettingsForm(userSettings: UserSettings) : Observable<any> {

    return this.http.post('https://putsreq.com/QkZ5KavG7aDf0F3h4aZ3', userSettings);


    //return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Monatlich', 'Jährlich', 'Lebenslang']);
  }
}
