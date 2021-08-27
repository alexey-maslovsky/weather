export default class WeatherApi {
  find(search) {
    const testData = {
      temperature: '+17',
      forecast: [
        {
          temperature: '+1',
        },
        {
          temperature: '+18',
        },
        {
          temperature: '+20',
        },
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(testData), 5000);
    });
  }
}
