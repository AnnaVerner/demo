import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocaleRedirectService {

  constructor() { }
  languages = [{language: 'de', countries: ['at', 'de', 'lt']}];

  getRedirectURL(country) {
    return typeof this.getLanguage(country, this.languages) === 'undefined' ? 'en' :  this.getLanguage(country, this.languages);
  }

  getLanguage(country, languages) {
    const defaultLanguage = 'en';
    for (const item of languages) {
      if (item.countries.indexOf(country.toLowerCase()) !== -1) {
        return item.language;
      }
    }
    return defaultLanguage;
  }
}
