export interface Weather {
  latitude: string;
  longitude:string;
  current_weather: {
    temperature:number;
    weathercode:number;
  };
  hourly: {
    temperature_2m: number[];
  }
}

export interface Forecast {
  current: number; 
  lowest: number;
  highest: number;
}

// "latitude": 52.52,
//   "longitude": 13.419,
//   "elevation": 44.812,
//   "generationtime_ms": 2.2119,
//   "utc_offset_seconds": 0,
//   "timezone": "Europe/Berlin",
//   "timezone_abbreviation": "CEST",
//   "hourly": {
//     "time": ["2022-07-01T00:00", "2022-07-01T01:00", "2022-07-01T02:00", ...],
//     "temperature_2m": [13, 12.7, 12.7, 12.5, 12.5, 12.8, 13, 12.9, 13.3, ...]
//   },
//   "hourly_units": {
//     "temperature_2m": "°C"
//   },
//   "current_weather": {
//     "time": "2022-07-01T09:00",
//     "temperature": 13.3,
//     "weathercode": 3,
//     "windspeed": 10.3,
//     "winddirection": 262
//   }