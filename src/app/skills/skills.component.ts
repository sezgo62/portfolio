import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  iconsObjects = [
    {
      'image': 'angularIcon',
      'iconName': 'Angular'
    },

    {
      'image': 'typescriptIcon',
      'iconName': 'Typescrip'
    },

    {
      'image': 'javascriptIcon',
      'iconName': 'Javascript'
    },

    {
      'image': 'htmlIcon',
      'iconName': 'HTML'
    },

    {
      'image': 'firebaseIcon',
      'iconName': 'Firebase'
    },

    {
      'image': 'gitIcon',
      'iconName': 'GIT'
    },

    {
      'image': 'cssIcon',
      'iconName': 'CSS'
    },

    {
      'image': 'apiIcon',
      'iconName': 'Rest-API'
    },

    {
      'image': 'scrumIcon',
      'iconName': 'Scrum'
    },

    {
      'image': 'materialIcon',
      'iconName': 'Material-Design'
    },

  ];


  /*ngOnInit() {
    let iconPool = document.getElementById('iconPool');
    iconPool.innerHTML = '';

    for (let i = 0; i < this.iconsObjects.length; i++) {
      const iconElements = this.iconsObjects[i];

      console.log(iconElements['image']);


      iconPool.innerHTML += `
 <div class="iconContainer">
 <img src="assets/icons/${iconElements['image']}.png">
<span>${iconElements['iconName']}</span>
 </div>`;



    }


  }*/

}