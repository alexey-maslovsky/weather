import TemperatureBlock from '../TemperatureBlock/TemperatureBlock';
import styles from './ForecastBlock.module.scss';

const ForecastBlock = ({ temperature, day }) => {
  return (
    <div className={styles.container}>
      <div className={styles.day}>{day}</div>
      <TemperatureBlock temperature={temperature} />
    </div>
  );
};

export default ForecastBlock;
