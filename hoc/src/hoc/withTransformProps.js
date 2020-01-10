import React from 'react';

const withTransformProps = transformFunc => BaseComponent => baseProps => {
  const transformedProps = transformFunc(baseProps)
  return <BaseComponent {...transformedProps} />
}

const DisplayList = ({ list }) =>
  list.map(char => (
    <div key={char.name}>
      <div>Character: {char.name}</div>
      <div>Side: {char.side}</div>
    </div>
  ))

const FilteredTransformedList = withTransformProps(({ list, side }) => ({
  list: list.filter(char => char.side === side)
}))(DisplayList)

export default FilteredTransformedList;