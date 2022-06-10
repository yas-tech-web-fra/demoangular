import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
items: string[]= ["Carlos", "Jhonny Halliday", "Michel Polnareff","Patrick Sebastien"]
  constructor() { }

  ngOnInit(): void {
  }

}
