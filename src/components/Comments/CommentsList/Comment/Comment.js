import { Avatar } from '@material-ui/core';
import styles from './Comment.module.scss';

const Comment = ({ name, text }) => {
  return (
    <div className={styles.container}>
      <Avatar variant="square" className={styles.avatar}>
        {name[0]}
      </Avatar>
      <div>
        <div className={styles.name}>{name}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </div>
  );
};

export default Comment;
