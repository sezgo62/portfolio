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

  openPopup() {
    let popupWindowTest = document.getElementById('popupWindow');
    let popupButton = document.getElementById('popupButton');

    popupWindowTest.classList.remove('d-none');
    popupButton.classList.add('d-none');


    document.getElementById('popupWindow').classList.add('popupWindow');


  }

  closePupup() {
    let popupWindowTest = document.getElementById('popupWindow');
    let popupButton = document.getElementById('popupButton');



    popupWindowTest.classList.remove('popupWindow');
    popupWindowTest.classList.add('d-none');
    popupWindowTest.classList.remove('d-none');

    popupButton.classList.remove('d-none');


    document.getElementById('popupWindow').classList.add('closePopupWindow');
  }

  removeLines() {
  let line0 = document.getElementById('line0');
  let line1 = document.getElementById('line1');
  let line2 = document.getElementById('line2');

  let thatButton0 = document.getElementById('button0');
  let thatButton1 = document.getElementById('button1');
  let thatButton2 = document.getElementById('button2');


  line0.classList.add('d-none');
  line1.classList.add('d-none');
  line2.classList.add('d-none');

  thatButton0.classList.remove('green');
  thatButton1.classList.remove('green');
  thatButton2.classList.remove('green');


  }

}


