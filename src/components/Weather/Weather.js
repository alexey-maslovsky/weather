import { useEffect } from 'react';
import SearchInput from '../SearchInput/SearchInput';
import { useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import styles from './Weather.module.scss';
import CityTemperature from './CityTemperature/CityTemperature';
import ForecastBlock from './ForecastBlock/ForecastBlock';
import { batch, useDispatch, useSelector } from 'react-redux';
import { getWeatherData } from '../../store/weather';
import Likes from './Likes/Likes';
import { getLikes } from '../../store/likes';
import { getComments } from '../../store/comments';
import CommentsCount from './CommentsCount/CommentsCount';

const DAYS = ['Tomorrow', 'After Tomorrow', 'After After Tomorrow'];

const FORECAST_SKELETON_DATA = [ { day: '1' }, { day: '2' }, { day: '3' } ];

const Weather = () => {
  const history = useHistory();
  const { city } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.weather);
  const { comments } = useSelector((state) => state.comments);

  const loadData = async () => {
    batch(() => {
      dispatch(getWeatherData(city));
      dispatch(getLikes(city));
      dispatch(getComments(city));
    });
  };

  const handleOnSubmit = (search) => {
    history.push(`/${search}`);
  };

  useEffect(() => {
    loadData();
  }, [city]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <SearchInput
          value={city}
          disabled={!data}
          onSubmit={handleOnSubmit}
        />
        <Likes className={styles.likes} />
        <CommentsCount
          className={styles.commentsCount}
          count={comments && comments.length}
          city={city}
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
