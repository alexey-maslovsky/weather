const validateForm = (data) => {
  const errors = {};

  if (data.name.length < 3) {
    errors.name = 'Input "Name" should be at least 3 characters long';
  }

  if (data.name.length === 0) {
    errors.name = 'Input "Name" is required';
  }

  if (data.text.length < 30) {
    errors.text = 'Input "Comment" should be at least 30 characters long';
  }

  if (data.text.length === 0) {
    errors.text = 'Input "Comment" is required';
  }

  return errors;
};

export default validateForm;
