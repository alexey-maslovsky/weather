import TemperatureBlock from '../TemperatureBlock/TemperatureBlock';
import styles from './CityTemperature.module.scss';

const CityTemperature = ({ city, temperature }) => {
  return (
    <div className={styles.container}>
      <div className={styles.city}>{city}</div>
      <TemperatureBlock temperature={temperature} />
    </div>
  );
};

export default CityTemperature;
