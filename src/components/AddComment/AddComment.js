import { Box, Button, Modal, TextField } from '@material-ui/core';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { addComment } from '../../store/comments';
import Spinner from '../../components/Spinner/Spinner';
import styles from './AddComments.module.scss';

const AddComment = () => {
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    try {
      await dispatch(addComment({
        name,
        text: comment,
      }));

      handleOnClose();
    }
    finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal open onClose={handleOnClose}>
      <Box className={styles.modalBody}>
        <h1>Add Comment</h1>
        <TextField
          label="Name"
          value={name}
          onChange={handleNameChange}
          fullWidth
          className={styles.name}
        />
        <TextField
          label="Comment"
          value={comment}
          onChange={handleCommentChange}
          fullWidth
          multiline
          className={styles.comment}
          minRows={3}
          maxRows={10}
        />
        <div className={styles.modalFooter} >
          <Button
            onClick={handleOnClose}
            variant="outlined"
            className={styles.cancelButton}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            onClick={handleOnClick}
            variant="contained"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {!isLoading && 'Send'}
            {isLoading && <Spinner size="small" />}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default AddComment;
