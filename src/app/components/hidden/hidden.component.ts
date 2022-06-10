import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.scss']
})
export class HiddenComponent implements OnInit {
  hidden: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }
onClick():void{


}
 toggle(): void {
    this.hidden = !this.hidden;
  }
}
