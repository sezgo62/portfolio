import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

@ViewChild('myForm') myForm!: ElementRef;
@ViewChild('nameField') nameField!: ElementRef;
@ViewChild('emailField') emailField!: ElementRef;
@ViewChild('messageField') messageField!: ElementRef;
@ViewChild('buttonField') buttonField!: ElementRef;


async sendMail() {
  //action="https://sezgin-guendogdu.developerakademie.net/send_mail/send_mail.php"
console.log('sending mail', this.myForm);
let nameField = this.nameField.nativeElement;
let emailField = this.emailField.nativeElement;
let messageField = this.messageField.nativeElement;
let buttonField = this.buttonField.nativeElement;

nameField.disabled = true;
emailField.disabled = true;
messageField.disabled = true;
buttonField.disabled = true;


let fd = new FormData();
fd.append('name', nameField.value);
fd.append('message', messageField.value);
fd.append('email', emailField.value);



await fetch('https://sezgin-guendogdu.developerakademie.net/send_mail/send_mail.php',
{
  method: 'POST',
  body: fd
}
);

nameField.disabled = false;
emailField.disabled = false;
messageField.disabled = false;
buttonField.disabled = false;
}
}
