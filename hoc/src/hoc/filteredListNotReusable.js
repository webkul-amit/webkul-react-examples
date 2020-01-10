import React from 'react';

const FilteredListNonReusable = ({ list, side }) => {
  const filteredList = list.filter(char => char.side === side);
  return filteredList.map(char => (
    <div key={char.name}>
      <div>Character: {char.name}</div>
      <div>Side: {char.side}</div>
    </div>
  ));
}

export default FilteredListNonReusable;
