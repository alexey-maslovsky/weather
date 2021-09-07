import Comment from './Comment/Comment';

const CommentsList = ({ comments = [] }) => {
  return (
    <div>
      {comments.map(({ name, text, id }) => (
        <Comment key={id} name={name} text={text} />
      ))}
    </div>
  );
};

export default CommentsList;
