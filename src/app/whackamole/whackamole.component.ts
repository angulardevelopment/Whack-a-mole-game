import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-whackamole',
  templateUrl: './whackamole.component.html',
  styleUrls: ['./whackamole.component.css'],
  standalone: false
})
export class WhackamoleComponent implements OnInit {
  scoreBoard = 0; // document.querySelector('.score');
  lastHole;
  timeUp = false;
  score = 0;

  constructor() {
    let moles = Array.from(document.querySelectorAll('.mole'));
    //  console.log(moles,'x');

    moles.forEach(mole => mole.addEventListener('click', this.bonk));
  }

  ngOnInit() {
  }



  randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === this.lastHole) {
      console.log('Ah nah thats the same one bud');
      return this.randomHole(holes);
    }
    this.lastHole = hole;
    return hole;
  }

  peep() {
    let holes = document.querySelectorAll('.hole');
    const time = this.randomTime(200, 1000);
    const hole = this.randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!this.timeUp) this.peep();
    }, time);
  }

  startGame() {
    this.scoreBoard = 0;
    this.timeUp = false;
    this.score = 0;
    this.peep();
    setTimeout(() => this.timeUp = true, 10000)
  }

  bonk(e?) {
    // if(!e.isTrusted) return; // cheater!
    this.score++;
    // hole.classList.remove('up');
    // this.parentNode.classList.remove('up');
    this.scoreBoard = (this.score);
  }

}
