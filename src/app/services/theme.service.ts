import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }
  theme = 'light';
  themeObject = {
    light: {bg: '#e0e0e0', font: '#3F51B5'},
    dark: {bg: '#333333', font: '#e0e0e0'}
  };

  changeTheme() {
    if (this.theme === 'dark') {
      this.theme = 'light';
      document.documentElement.style.setProperty('--bg-color', this.themeObject.light.bg);
      document.documentElement.style.setProperty('--font-color', this.themeObject.light.font);
    } else {
      this.theme = 'dark';
      document.documentElement.style.setProperty('--bg-color', this.themeObject.dark.bg);
      document.documentElement.style.setProperty('--font-color', this.themeObject.dark.font);
    }
  }
}
