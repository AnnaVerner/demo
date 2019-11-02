import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  getDelay(i){
    return i*0.25+'s';
  }
  employees = [
    {name: {en: 'Steven', de: 'Steve'},
    title: 'Senior Software Developer',
    skills: ['Kotlin', 'Java', 'TDD'],
    description: { en: 'Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by' +
        ' cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1', de: 'Captain America is a fictional superhero appearing in American comic books published by Marvel Comics. Created by' +
        ' cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from ' +
        'Timely Comics, a predecessor of Marvel Comics. '},
    businessDomains: ['ecommerce','IoT', 'Embeded programming'],
    photo: './assets/img/spider.jpg'},

    {name: {en: 'Bruce', de: 'Bruce'},
    title: 'Middle Software Developer',
    skills: ['Kotlin', 'Java', 'TDD'],
    description: { en: 'The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC' +
        ' Comics character Batman, the film is the second installment of Nolan\'s The Dark Knight Trilogy and a sequel to 2005\'s Batman ' +
        'Begins', de: 'The Dark Knight is a 2008 superhero film directed, co-produced, and co-written by Christopher Nolan. Based on the DC' +
      ' Comics character Batman, the film is the second installment of Nolan\'s The Dark Knight Trilogy and a sequel to 2005\'s Batman ' +
          'Begins, starring Christian Bale and supported by Michael Caine, Heath Ledger, Gary Oldman, Aaron Eckhart, Maggie Gyllenhaal, and' +
        ' Morgan Freeman '},
    businessDomains: ['ecommerce','IoT', 'Embeded programming'],
    photo: './assets/img/bat.jpg'},

    {name: {en: 'Peter', de: 'Peter'},
    title: 'Junior Software Developer',
    skills: ['Kotlin', 'Java', 'TDD'],
    description: { en: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first ' +
        'appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.', de: 'Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first ' +
        'appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the Silver Age of Comic Books.'},
    businessDomains: ['ecommerce','IoT', 'Embeded programming'],
    photo: './assets/img/cap.jpg'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
