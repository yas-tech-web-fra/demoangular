import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-filtre',
  templateUrl: './list-filtre.component.html',
  styleUrls: ['./list-filtre.component.scss']
})
export class ListFiltreComponent implements OnInit {
  items: string[]= ["Carlos", "Jhonny Halliday", "Michel Polnareff","Patrick Sebastien"]
  constructor() { }

  ngOnInit(): void {
  }

}
