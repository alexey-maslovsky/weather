import { useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import WeatherApi from '../../services/WeatherApi';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Weather.module.scss';
import CityTemperature from './CityTemperature/CityTemperature';
import ForecastBlock from './ForecastBlock/ForecastBlock';

const DAYS = ['Tomorrow', 'After Tomorrow', 'After After Tomorrow'];

const FORECAST_SKELETON_DATA = [ {}, {}, {} ];

const Weather = () => {
  const { city } = useParams();
  const [data, setData] = useState(null);

  const loadData = async () => {
    const api = new WeatherApi();

    const result = await api.find(city);

    setData(result);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <SearchInput />
      </div>
      <div className={styles.body}>
        <CityTemperature city={city} temperature={data?.temperature} />
      </div>
      <div className={styles.footer}>
        {(data?.forecast || FORECAST_SKELETON_DATA).map(({ temperature }, index) => (
          <ForecastBlock temperature={temperature} day={DAYS[index]} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
