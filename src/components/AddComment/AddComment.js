import { Box, Button, Modal, TextField } from '@material-ui/core';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { addComment } from '../../store/comments';
import Spinner from '../../components/Spinner/Spinner';
import styles from './AddComments.module.scss';
import validateForm from './validateForm';

const AddComment = () => {
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const commentRef = useRef(null);
  const [errors, setErrors] = useState({});

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
    setText(event.target.value);
  };

  const handleOnClick = async () => {
    const newErrors = validateForm({ name, text });
    setErrors(newErrors);

    if (Object.entries(newErrors).length > 0) {
      return;
    }

    setIsLoading(true);

    try {
      await dispatch(addComment({
        name,
        text: text,
      }));

      setName('');
      setText('');
      handleOnClose();
    }
    finally {
      setIsLoading(false);
    }
  };

  const handleNameKeyDown = (event) => {
    if (event.key === 'Enter') {
      commentRef.current.focus();
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
          onKeyDown={handleNameKeyDown}
          fullWidth
          className={styles.name}
          helperText={errors.name}
          error={errors.name?.length > 0}
        />
        <TextField
          label="Comment"
          value={text}
          onChange={handleCommentChange}
          fullWidth
          multiline
          className={styles.comment}
          minRows={3}
          maxRows={10}
          inputRef={commentRef}
          helperText={errors.text}
          error={errors.text?.length > 0}
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
