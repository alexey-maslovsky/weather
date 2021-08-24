import { useLocation } from 'react-router-dom';

const AddComment = () => {
  const location = useLocation();

  if (location.search !== '?add') {
    return null;
  }

  return (
    <div>
      Add Comment
    </div>
  );
};

export default AddComment;
