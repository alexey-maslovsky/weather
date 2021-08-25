export default class WeatherApi {
  find(search) {
    const testData = {
      temperature: '12 C',
      forecast: [
        {
          temperature: '1 C',
        },
        {
          temperature: '2 C',
        },
        {
          temperature: '3 C',
        },
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(testData), 500);
    });
  }
}
