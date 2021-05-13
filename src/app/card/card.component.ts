import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  hoverActivated = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleMouseover() {
    if (this.hoverActivated === false) {
      this.hoverActivated = true;
    }
  }

  handleMouseout() {
    if (this.hoverActivated === true) {
      this.hoverActivated = false;
    }
  }

}
