import { Injectable } from '@angular/core';

import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  setWeatherIcon(data: Weather): number {
    let iconType = 0;
    const weatherCode = data.current_weather.weathercode;
    if (weatherCode <= 3) {
      return iconType = 1
    }
    if (weatherCode > 3 && weatherCode <= 51) {
      return iconType = 2
    }
    if (weatherCode > 51 && weatherCode <= 67) {
      return iconType = 3
    } else {
      return iconType = 4
    }
    
  }

  // Code	Description
    // 0	Clear sky
    // 1, 2, 3	Mainly clear, partly cloudy, and overcast
    // 45, 48	Fog and depositing rime fog
    // 51, 53, 55	Drizzle: Light, moderate, and dense intensity
    // 56, 57	Freezing Drizzle: Light and dense intensity
    // 61, 63, 65	Rain: Slight, moderate and heavy intensity
    // 66, 67	Freezing Rain: Light and heavy intensity
    // 71, 73, 75	Snow fall: Slight, moderate, and heavy intensity
    // 77	Snow grains
    // 80, 81, 82	Rain showers: Slight, moderate, and violent
    // 85, 86	Snow showers slight and heavy
    // 95 *	Thunderstorm: Slight or moderate
    // 96, 99 *	Thunderstorm with slight and heavy hail
}
