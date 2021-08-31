import { Skeleton } from '@material-ui/core';
import { Favorite } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { like } from '../../../store/likes';

const Likes = () => {
  const { count } = useSelector((state) => state.likes);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(like()); // add search as property and pass it to like()
  };

  return (
    <div>
      {count !== null && <p>{count}</p>}
      {count === null && <Skeleton variant="text" />}
      <Favorite onClick={handleOnClick} />
    </div>
  );
};

export default Likes;
