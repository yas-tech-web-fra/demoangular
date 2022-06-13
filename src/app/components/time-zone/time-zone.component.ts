import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.scss'],
})
export class TimeZoneComponent implements OnInit {
  timezones: string[] = ['America/Chicago', 'Asia/Jakarta', 'Europe/Paris'];
  constructor() {}

  ngOnInit(): void {}

  refresh() {
    let t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()', t);
  }

  public setTime(timezone: string): string {
    const date = new Date().toLocaleString('fr-FR', { timeZone: timezone });
    const time = date.split(' ')[1];
    // Il manque la partie qui permet de mettre l'heure à jour toutes les millisecondes
   setInterval(setTimeout,  1000);
    return time;
  }


}
