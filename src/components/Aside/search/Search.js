import React from 'react';

const SearchInput = ({handleHistoryChange}) => {

  const formSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value;
    if(value) {
      handleHistoryChange(value);
      e.target.reset();
    }
  }

  return (
    <form method="POST" onSubmit={formSubmit}>
      <input name="search" />
    </form>
  )
}

export default SearchInput;