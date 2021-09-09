import { TextField, InputAdornment, debounce } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useRef, useState } from 'react';

const SearchInput = ({
  value,
  disabled,
  onSubmit,
}) => {
  const [search, setSearch] = useState(value);
  const onSumbitDebounced = useRef(debounce(onSubmit, 1000));

  const handleOnChange = (event) => {
    setSearch(event.target.value);

    onSumbitDebounced.current(event.target.value);
  };

  return (
    <TextField
      value={search}
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
