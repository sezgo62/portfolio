import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  selectedButton;
  textUnderLine;

  assignColor(i) {

    if (i !== this.selectedButton && typeof this.selectedButton !== 'undefined') {
      let thatButton = document.getElementById(`button${this.selectedButton}`);
      thatButton.classList.remove('green');

      let thatLine = document.getElementById(`line${this.selectedButton}`);
      thatLine.classList.add('d-none');
    }

    if (i == 0) {
      let thatButton = document.getElementById(`button${i}`);
      thatButton.classList.add('green');

      let thatLine = document.getElementById(`line${i}`);
      thatLine.classList.remove('d-none');

      this.selectedButton = i;
    }

    if (i == 1) {
      let thatButton = document.getElementById(`button${i}`);
      thatButton.classList.add('green');

      let thatLine = document.getElementById(`line${i}`);
      thatLine.classList.remove('d-none');

      this.selectedButton = i;
    }

    if (i == 2) {
      let thatButton = document.getElementById(`button${i}`);
      thatButton.classList.add('green');

      let thatLine = document.getElementById(`line${i}`);
      thatLine.classList.remove('d-none');

      this.selectedButton = i;
    }
  }

}
