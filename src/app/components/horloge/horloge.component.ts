import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horloge',
  templateUrl: './horloge.component.html',
  styleUrls: ['./horloge.component.scss']
})
export class HorlogeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

@Input()
hour:   string = '00:00:00';

}
