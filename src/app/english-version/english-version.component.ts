import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../services/theme.service';

@Component({
  selector: 'app-english-version',
  templateUrl: '../page-template/page-template.component.html',
  styleUrls: ['../page-template/page-template.component.scss']
})
export class EnglishVersionComponent implements OnInit {
  title = 'English Version!';

  constructor(private theme: ThemeService) { }


  ngOnInit() {
  }

}
