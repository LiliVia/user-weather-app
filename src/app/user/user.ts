import {Weather} from "../weather/weather";

export interface User {
  id: {
    value: string
  };
  name: {
    title: string
    first: string
    last: string
  };
  gender: string;
  picture: {
    medium: string
  };
  location: Location;
  email: string;
  weather?: Weather;
}
// [ { "gender": "male", "name": { "title": "Mr", "first": "Anton", "last": "Bächle" }, "location": { "street": { "number": 8862, "name": "Erlenweg" }, "city": "Seligenstadt", "state": "Berlin", "country": "Germany", "postcode": 63710, "coordinates": { "latitude": "-50.3082", "longitude": "-104.4421" }, "timezone": { "offset": "-10:00", "description": "Hawaii" } }, "email": "anton.bachle@example.com", "login": { "uuid": "111e4c29-d47a-4822-acfb-373a50a458e7", "username": "yellowostrich312", "password": "savannah", "salt": "ZsDPIkl5", "md5": "bc73f62305260c55dbe0632619a00c0c", "sha1": "69707d4a12e39c7ac247ecbe48eb11080a7b69be", "sha256": "5431facc27193c0a2a416237e041f3aabf62ea3bb0fe603c512418a3e5f8f59b" }, "dob": { "date": "1970-10-09T14:18:12.105Z", "age": 52 }, "registered": { "date": "2006-06-12T16:13:17.191Z", "age": 17 }, "phone": "0306-2358423", "cell": "0179-0647248", "id": { "name": "SVNR", "value": "62 091070 B 318" }, "picture": { "large": "https://randomuser.me/api/portraits/men/68.jpg", "medium": "https://randomuser.me/api/portraits/med/men/68.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/68.jpg" }, "nat": "DE" } ]

export interface Location {
  city: string;
  country: string;
  coordinates: {
    latitude: string;
    longitude:string;
  }
}


