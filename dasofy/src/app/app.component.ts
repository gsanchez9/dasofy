import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'DASOFY Consultores';
  mapLat: number = 9.988338;
  mapLng: number = -84.084000;
  lat: number = 9.988338;
  lng: number = -84.103495;
}
