import { Component, Input } from '@angular/core';

import { WeatherService } from './weather.service';
import { Weather } from './weather';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  providers: [WeatherService],
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() data!: Weather;
  weatherIconType = 1;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.setWeatherIcon();
  }

  private setWeatherIcon() {
    this.weatherIconType = this.weatherService.setWeatherIcon(this.data);
  }
}
