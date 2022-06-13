import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-menu',
  templateUrl: './clock-menu.component.html',
  styleUrls: ['./clock-menu.component.scss']
})
export class ClockMenuComponent implements OnInit {
timezones: string[]=[
  'Europe/Paris',
  'Europe/Helsinki',
  'America/Los_Angeles',
  'America/Montreal',
  'Asia/Tokio',
  'Africa/Cairo'
];

  constructor() { }

  ngOnInit(): void {
  }
  setTime(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const hour = date.split(' ')[1];

    setInterval(() => {
      this.setTime(timezone);
    }, 1000);

    return hour;
}
}
