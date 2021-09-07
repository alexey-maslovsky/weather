import { AddCircleOutline } from '@material-ui/icons'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import CommentsList from './CommentsList/CommentsList';
import styles from './Comments.module.scss';

const Comments = () => {
  const history = useHistory();
  const { comments } = useSelector((state) => state.comments);

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
      {!comments && <Spinner />}
      {comments?.length === 0 && <div className={styles.noComments}>
        No comments have been added yet :(
      </div>}
      {comments?.length > 0 && <CommentsList comments={comments} /> }
    </div>
  );
};

export default Comments;
