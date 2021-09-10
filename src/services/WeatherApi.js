export default class WeatherApi {
  async find(search) {
    const response = await fetch(`/api/weather/${search}`);

    const data = await response.json();

    return data.temperature ? data : null;
  }
}
