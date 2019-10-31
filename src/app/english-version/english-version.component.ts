import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-english-version',
  templateUrl: '../page-template/page-template.component.html',
  styleUrls: ['./english-version.component.scss']
})
export class EnglishVersionComponent implements OnInit {
  title = 'English Version!';
  constructor() { }

  ngOnInit() {
  }

}
