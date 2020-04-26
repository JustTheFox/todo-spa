import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SearchInput from 'react-search-input';
import { setSearchValueAction } from '../../store/actions/search';
import './search.scss';

const Search = () => {
  const dispatch = useDispatch();

  const setSearchValue = useCallback(
    (value) => {
      dispatch(setSearchValueAction(value));
    },
    [dispatch],
  );

  return (
    <SearchInput
      placeholder="Поиск..."
      onChange={setSearchValue}
      className="search"
    />
  );
};

export default Search;
