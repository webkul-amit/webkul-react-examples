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
  )
);

const ReusedWithTransformProps = withTransformProps(({ list, side }) => ({
  list: [...list, { name: 'Han Solo', side: 'light' }]
}))(DisplayList)

export default ReusedWithTransformProps;