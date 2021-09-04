import { Skeleton } from '@material-ui/core';
import { Comment } from '@material-ui/icons'
import clsx from 'clsx';
import { useHistory } from 'react-router-dom';
import styles from './CommentsCount.module.scss';

const CommentsCount = ({ count, className, city }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/${city}/comments`);
  };

  return (
    <div className={clsx(styles.container, className)} onClick={handleOnClick}>
      <Comment className={styles.icon} />
      {count !== null && <p className={styles.text}>{count}</p>}
      {count === null && <Skeleton className={styles.text} variant="text" width={50} />}
    </div>
  );
};

export default CommentsCount;
