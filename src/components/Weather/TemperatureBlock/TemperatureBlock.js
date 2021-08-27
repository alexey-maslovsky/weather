import { Skeleton } from '@material-ui/core';
import { CloudOutlined } from '@material-ui/icons'
import styles from './TemperatureBlock.module.scss';

const TemperatureBlock = ({ temperature }) => {
  return (
    <div className={styles.container}>
      {temperature && <div className={styles.temperature}>{temperature}</div>}
      {temperature && <CloudOutlined className={styles.icon} />}
      {!temperature && <Skeleton className={styles.temperature} variant="text" width={50} />}
      {!temperature && <Skeleton className={styles.icon} variant="circular" width={36} height={36} />}
    </div>
  );
};

export default TemperatureBlock;
