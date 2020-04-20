import React from 'react';
import FilterItem from './FilterItem';
import { FILTERS } from '../../store/actions';
import './filter.scss';

const FilterList = () => {
  return (
    <ul className="nav nav-pills filter flex-nowrap mb-4">
      <FilterItem className="mr-3" filter={FILTERS.SHOW_ALL}>
        Все
      </FilterItem>
      <FilterItem className="mr-3" filter={FILTERS.SHOW_FAVORITE}>
        Избранные
      </FilterItem>
      <FilterItem className="mr-3" filter={FILTERS.SHOW_ACTIVE}>
        Активные
      </FilterItem>
      <FilterItem className="mr-3" filter={FILTERS.SHOW_COMPLETED}>
        Завершенные
      </FilterItem>
    </ul>
  );
};

export default FilterList;
