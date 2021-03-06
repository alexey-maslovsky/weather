import { Skeleton } from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons'
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dislike, like } from '../../../store/likes';
import styles from './Likes.module.scss';

const Likes = ({ className, search }) => {
  const { count } = useSelector((state) => state.likes);
  const dispatch = useDispatch();
  const [isLiked, setIsLiked] = useState(false);

  const handleOnClick = () => {
    if (isLiked) {
      setIsLiked(false);
      dispatch(dislike(search));
    } else {
      setIsLiked(true);
      dispatch(like(search));
    }
  };

  return (
    <div className={clsx(styles.container, className)}>
      {count !== null && <p className={styles.text}>{count}</p>}
      {count === null && <Skeleton className={styles.text} variant="text" width={50} />}
      {!isLiked && <FavoriteBorder className={styles.icon} onClick={handleOnClick} />}
      {isLiked && <Favorite className={styles.icon} onClick={handleOnClick} />}
    </div>
  );
};

export default Likes;
