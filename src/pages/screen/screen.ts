import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*export class Hero {
  id: number;
  name: string;
  answer = [];
}*/

/*const HEROES: Hero[] = [
  {
    id: 1, name: 'Q1', answer: [
      {
        id: 1,
        name: "Q1A1",
        correct: true
      },
      {
        id: 2,
        name: "Q1A2",
        correct: false
      }
    ]
  },
  {
    id: 2, name: 'Q2', answer: [
      {
        id: 1,
        name: "Q2A1",
        correct: true
      },
      {
        id: 2,
        name: "Q2A2",
        correct: false
      }
    ]
  },
  {
    id: 3, name: 'Q3', answer: [
      {
        id: 1,
        name: "Q3A1",
        correct: true
      },
      {
        id: 2,
        name: "Q3A2",
        correct: false
      }
    ]
  },
  {
    id: 4, name: 'Q4', answer: [
      {
        id: 1,
        name: "Q4A1",
        correct: true
      },
      {
        id: 2,
        name: "Q4A2",
        correct: false
      }
    ]
  },
  {
    id: 5, name: 'Q5', answer: [
      {
        id: 1,
        name: "Q5A1",
        correct: true
      },
      {
        id: 2,
        name: "Q5A2",
        correct: false
      }
    ]
  },
  {
    id: 6, name: 'Q6', answer: [
      {
        id: 1,
        name: "Q6A1",
        correct: true
      },
      {
        id: 2,
        name: "Q6A2",
        correct: false
      }
    ]
  },
  {
    id: 7, name: 'Q7', answer: [
      {
        id: 1,
        name: "Q7A1",
        correct: true
      },
      {
        id: 2,
        name: "Q7A2",
        correct: false
      }
    ]
  },
  {
    id: 8, name: 'Q8', answer: [
      {
        id: 1,
        name: "Q8A1",
        correct: true
      },
      {
        id: 2,
        name: "Q8A2",
        correct: false
      }
    ]
  }
];*/

@Component({
  selector: 'page-screen',
  templateUrl: 'screen.html',
})
export class ScreenPage implements OnInit {

  title = 'หัวข้อคัดกรอง';
  //heroes = HEROES;
  //selectedHero: Hero;
  counter: number = 1;
  answer = 0;
  showAnswer = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.show(1);

  }

  selectedAnswer(item) {

    setTimeout(() => {

      this.show(this.counter += 1);

    }, 500);

    if (this.counter == 1 && item == 1) {
      this.answer = this.answer + 1;
    } else if (this.counter == 2 && item == 2) {
      this.answer = this.answer + 1;
    } else if (this.counter == 3 && item == 3) {
      this.answer = this.answer + 1;
    } else if (this.counter == 4 && item == 4) {
      this.answer = this.answer + 1;
    }
  }

  show(itemSelected) {
    /*for (let i of HEROES) {
      if (i.id == itemSelected) {
        this.selectedHero = i;
      }
    }*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScreenPage');
  }

  /*onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/

  reset() {
    this.counter = 1;
    this.answer = 0;
    this.showAnswer = false;
  }

  process() {
    this.showAnswer = true;
  }

  next() {
    if (this.counter < 4) {
      this.show(this.counter += 1);
    }
  }

  pre() {
    if (this.counter > 1) {
      this.show(this.counter -= 1);
    }
  }

}
