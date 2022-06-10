import { Component, Input ,OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-alert-buton',
  templateUrl: './generic-alert-buton.component.html',
  styleUrls: ['./generic-alert-buton.component.scss']
})
export class GenericAlertButonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  buttonTitle!: string;

  @Input()
  alertMessage!: string;

  onClick(){
    alert(this.alertMessage);
  }
}
