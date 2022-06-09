import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  //ecrire directement dans la page 'app-fist-component':/    template: '<p>Coucou</p>',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string ="Alex";

  constructor() { }

  ngOnInit(): void {
  }

}
