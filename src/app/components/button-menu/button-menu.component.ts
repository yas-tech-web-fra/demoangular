import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-menu',
  templateUrl: './button-menu.component.html',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {
buttons: any[]=[
  {
    buttonTitle:"Philippe !",
    alertMessage: "Je sais où tu te caches !"
  },
  {
    buttonTitle: 'Marcoooo',
    alertMessage: 'Bongo !'
  },
  {
    buttonTitle: 'Allo',
    alertMessage: 'Ben allo Quoi !'
  }
]
  constructor() { }

  ngOnInit(): void {
  }

}
