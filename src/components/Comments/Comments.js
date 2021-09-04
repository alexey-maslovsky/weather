import { AddCircleOutline } from '@material-ui/icons'
import { useHistory } from 'react-router-dom';
import styles from './Comments.module.scss';

const Comments = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push({
      pathname: history.location.pathname,
      search: '?add',
    });
  };

  return (
    <div className={styles.container}>
      <h1>
        Comments{' '}
        <AddCircleOutline
          className={styles.icon}
          onClick={handleOnClick}
        />
      </h1>
      <div className={styles.noComments}>
        No comments have been added yet :(
      </div>
    </div>
  );
};

export default Comments;
