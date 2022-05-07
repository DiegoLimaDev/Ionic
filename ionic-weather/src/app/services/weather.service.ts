import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  /* eslint-disable*/
  getWeatherData(): Observable<any> {
    let apiId = '633a0917b6e3f09424e20d5b43ce27eb';
    let lat = -8.0089;
    let lon = -34.8553;

    let queryString = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiId}`;

    return this.http.get(queryString);
  }
}
