export default class WeatherApi {
  find(search) {
    const testData = {
      temperature: '+17',
      forecast: [
        {
          day: '1',
          temperature: `+${Math.round(Math.random() * 100)}`,
        },
        {
          day: '2',
          temperature: `+${Math.round(Math.random() * 100)}`,
        },
        {
          day: '3',
          temperature: `+${Math.round(Math.random() * 100)}`,
        },
      ],
    };

    return new Promise((resolve) => {
      setTimeout(() => resolve(search.length > 4 ? testData : null), 2000);
    });
  }
}
