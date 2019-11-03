import {Component, ElementRef, OnInit, Renderer} from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  technologies = [
    {name: 'Kotlin',
    usage: {en: 'BE Development, Android', de: 'BE Development, Android'},
    benefits: {en: 'Modern Java compatible language', de: 'Modern Java compatible language'},
    url: 'https://kotlinlang.org',
    src: './assets/img/kotlin.svg'},
    {name: 'Dart',
    usage: {en: 'BE Development, Android, FE', de: 'BE Development, Android, FE'},
    benefits: {en: 'Dart is a client-optimized language for fast apps on any platform', de: 'Dart is a client-optimized language for fast apps on any platform'},
    url: 'https://dart.dev/',
    src: './assets/img/dart.svg'},
    {name: 'Flutter',
    usage: {en: 'BE Development, Android, FE', de: 'BE Development, Android, FE'},
    benefits: {en: 'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.', de: 'Flutter is Google’s UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.'},
    url: 'https://flutter.dev/',
    src: './assets/img/flutter.svg'}
  ];
  activeTab = this.technologies[0].name;
  constructor(private renderer: Renderer, private elem: ElementRef) { }

  showTabContent(event) {
    console.log(event);

   this.activeTab = event.target.id;
   console.log(this.activeTab);
  }

  ngOnInit() {
  }

}
