import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserIpService } from './services/user-ip.service';
import { LocaleRedirectService } from './services/locale-redirect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 constructor( private ipService: UserIpService, private locale: LocaleRedirectService, private router: Router) {}

 userCountry: string;
 language: any;
 ngOnInit() {
  this.ipService.getIP().subscribe((ip: UserIP) =>
    this.ipService.getUserIp(ip.ip)
      .subscribe(country => {
        this.userCountry = country;
        let locale = this.locale.getRedirectURL(this.userCountry);
        this.router.navigate(['/', locale])
          .then( (e) => {
           console.log(e);
        });
      }));
 }
}

interface UserIP {
  ip: string;
}
