import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-german-version',
  templateUrl: '../page-template/page-template.component.html',
  styleUrls: ['./german-version.component.scss']
})
export class GermanVersionComponent implements OnInit {
  title = 'German Version!'
  constructor() { }

  ngOnInit() {
  }

}
