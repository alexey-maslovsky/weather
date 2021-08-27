import { TextField, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';

const SearchInput = ({
  value,
  disabled,
  onChange,
  onSubmit,
}) => {
  const handleOnKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <TextField
      value={value}
      onChange={onChange}
      onKeyDown={handleOnKeyDown}
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
