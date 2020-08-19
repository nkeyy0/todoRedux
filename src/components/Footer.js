import React from 'react'
import FilterLink from '../containers/FilterLink'
import ButtonDeleteCompleted from '../containers/ButtonDeleteCompleted'
import { VisibilityFilters } from '../actions'

const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <ButtonDeleteCompleted></ButtonDeleteCompleted>
  </div>
)

export default Footer
