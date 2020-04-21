import React from 'react';
import FilterItem from './filter-item';
import { FILTERS } from '../../store/const';
import './filter.scss';

const FilterList = () => {
  return (
    <ul className="nav nav-pills filter mb-2">
      <FilterItem filter={FILTERS.SHOW_ALL}>Все</FilterItem>
      <FilterItem filter={FILTERS.SHOW_FAVORITE}>Избранные</FilterItem>
      <FilterItem filter={FILTERS.SHOW_ACTIVE}>Активные</FilterItem>
      <FilterItem filter={FILTERS.SHOW_COMPLETED}>Завершенные</FilterItem>
    </ul>
  );
};

export default FilterList;
