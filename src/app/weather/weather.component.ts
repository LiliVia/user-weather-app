import { Component, Input, OnInit } from '@angular/core';

import { WeatherService } from './weather.service';
import { Forecast, Weather } from './weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers: [WeatherService],
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() data!: Weather;
  weatherIconType = 1;
  forecast!: Forecast;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.setForecast(this.data);
  }

  private setForecast(data: Weather): void {
    this.weatherIconType = this.weatherService.setWeatherIcon(data);
    this.forecast = this.weatherService.parseWeatherDate(data);
  }
}
