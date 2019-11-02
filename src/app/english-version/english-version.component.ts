import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ThemeService} from '../services/theme.service';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-english-version',
  templateUrl: '../page-template/page-template.component.html',
  styleUrls: ['../page-template/page-template.component.scss']
})
export class EnglishVersionComponent implements OnInit, AfterViewInit {
  title = 'English Version!';

  constructor(private theme: ThemeService, private  wowService: NgwWowService) { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    this.wowService.init();
  }

}
