import { TextField, InputAdornment, debounce } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useRef } from 'react';

const SearchInput = ({
  value,
  disabled,
  onChange,
  onSubmit,
}) => {
  const onSumbitDebounced = useRef(debounce(onSubmit, 1000));

  const handleOnChange = (event) => {
    onChange(event);

    onSumbitDebounced.current();
  };

  return (
    <TextField
      value={value}
      onChange={handleOnChange}
      disabled={disabled}
      placeholder="Type some city..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      variant="standard"
    />
  );
};

export default SearchInput;
