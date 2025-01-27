import dotenv from 'dotenv';
dotenv.config();

// TODO: Define an interface for the Coordinates object
interface Coordinates {
  lat: number;
  lon: number;
}
// TODO: Define a class for the Weather object
class Weather{
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;

  constructor(temperature:number, description: string, humidity: number, windSpeed: number);
    this.temperature = temperature;
    this.description = description;
    this.humidity: humidity;
    this.windSpeed: windSpeed;

}
// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  private baseURL: string = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
  private apiKey: string | undefined =;
  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {

  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates {
    const { lat, lon} = locationData[0];
    return{ lat,lon};
  }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return ``;
  }
  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {
    return ``;
  }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() {
    const locationData = await this.fetchLocationData(city);
    return this.destructureLocationData(locationData);
  }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {
    const url = this.buildWeatherQuery(coordinates);
    const response = await fetch(url);
    if (!response.ok){
      return(error)
    }
  }
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any): {
  
    }
  }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {}
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) {}
}

export default new WeatherService();
