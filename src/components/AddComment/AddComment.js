import { Box, Button, Modal, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { addComment } from '../../store/comments';
import styles from './AddComments.module.scss';

const AddComment = () => {
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();

  if (location.search !== '?add') {
    return null;
  }

  const handleOnClose = () => {
    history.push(history.location.pathname);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleOnClick = async () => {
    await dispatch(addComment({
      name,
      text: comment,
    }));

    handleOnClose();
  };

  return (
    <Modal open onClose={handleOnClose}>
      <Box className={styles.modalBody}>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          label="Comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <Button onClick={handleOnClick}>Send</Button>
      </Box>
    </Modal>
  );
};

export default AddComment;
