import { CircularProgress } from '@material-ui/core';
import clsx from 'clsx';
import styles from './Spinner.module.scss';

const Spinner = ({ size }) => {
  return (
    <div className={clsx(styles.container, size === 'small' && styles.small)}>
      <CircularProgress className={styles.spinner} size={size === 'small' ? 20 : 40} />
      <p className={styles.text}>Please wait...</p>
    </div>
  );
};

export default Spinner;
