import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-german-version',
  templateUrl: '../page-template/page-template.component.html',
  styleUrls: ['../page-template/page-template.component.scss']
})
export class GermanVersionComponent implements OnInit {
  title = 'German Version!';


  constructor(private theme: ThemeService) { }
  ngOnInit() {
  }

}
