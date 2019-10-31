import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {error} from 'util';
import {computeLineStartsMap} from '@angular/core/schematics/utils/line_mappings';

@Injectable({
  providedIn: 'root'
})
export class UserIpService {

  constructor(private http: HttpClient) { }
  IP_API_URL = 'https://ipapi.co/';

  getUserCountry(ip) {
    return this.http.get(this.IP_API_URL + ip + '/country', {responseType: 'text'}).pipe(
      tap(
        data => console.log(data),
        error => console.log(error)
      )
    );
  }

  getIP() {
    return this.http.get('https://api.ipify.org?format=json');
  }
}
