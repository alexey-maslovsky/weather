import { useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import WeatherApi from '../../services/WeatherApi';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Weather.module.scss';
import CityTemperature from './CityTemperature/CityTemperature';
import ForecastBlock from './ForecastBlock/ForecastBlock';
import { useDispatch } from 'react-redux';
import { setWeatherData } from '../../store';

const DAYS = ['Tomorrow', 'After Tomorrow', 'After After Tomorrow'];

const FORECAST_SKELETON_DATA = [ { day: '1' }, { day: '2' }, { day: '3' } ];

const Weather = () => {
  const history = useHistory();
  const { city } = useParams();
  const [data, setData] = useState(null);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  const loadData = async () => {
    const api = new WeatherApi();

    dispatch(setWeatherData(null));
    setData(null);

    const result = await api.find(city);

    dispatch(setWeatherData(result));
    setData(result);
  };

  const handleOnChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOnSubmit = () => {
    history.push(`/${search}`);
  };

  useEffect(() => {
    loadData();
  }, [city]);

  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <SearchInput
          value={search}
          disabled={!data}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
      </div>
      <div className={styles.body}>
        <CityTemperature city={city} temperature={data?.temperature} />
      </div>
      <div className={styles.footer}>
        {(data?.forecast || FORECAST_SKELETON_DATA).map(({ temperature, day }, index) => (
          <ForecastBlock key={day} temperature={temperature} day={DAYS[index]} />
        ))}
      </div>
    </div>
  );
};

export default Weather;
