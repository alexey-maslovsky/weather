import { CircularProgress } from '@material-ui/core';
import styles from './Spinner.module.scss';

const Spinner = () => {
  return (
    <div className={styles.container}>
      <CircularProgress />
      <p className={styles.text}>Please wait...</p>
    </div>
  );
};

export default Spinner;
