import Typed from 'typed.js/src/typed.js';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss']
})
export class GreetingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const typed = new Typed('#typed', {
      strings: ['Deliver fast','The smartest solutions', 'Enjoy!'],
      // typing speed
      typeSpeed: 80,
      // time before typing starts
      startDelay: 1500,
      // backspacing speed
      backSpeed: 40,
      // time before backspacing
      backDelay: 800,
      // loop
      loop: true,
      // false = infinite
      loopCount: 'Infinite',
      // show cursor
      showCursor: true,
      // character for cursor
      cursorChar: '|',
      // attribute to type (null == text)
      attr: null
    });
  }

}
