import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public res;

  constructor(
    private weatherApi: WeatherService) {}

    ngOnInit() {
      this.getWeatherData();

    }

  getWeatherData() {
    this.weatherApi.getWeatherData().subscribe((response) =>{
      this.res = response;
      console.log(this.res);
    });
  }

  doRefresh(event) {
    console.log('Ion refresh running...');
    this.weatherApi.getWeatherData().subscribe((response) =>{
      this.res = response;
      console.log(this.res);
      console.log('Done reloading weather dara');
      event.target.complete();
    });
  }
}
