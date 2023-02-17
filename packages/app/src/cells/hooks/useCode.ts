import { createSelector, type EntityId } from '@reduxjs/toolkit';

import { useTypedSelector } from '~/common/hooks';

import { selectCells } from '../reducers';

const renderFn = `import { createRoot } from 'react-dom/client';
const rootEl = document.getElementById('root');
var render = (value) => {
  if (typeof value === 'object') {
    if (value.$$typeof && value.props) {
      const root = createRoot(rootEl);
      root.render(value);
    } else {
      rootEl.innerHTML = JSON.stringify(value);
    }
  } else {
    rootEl.innerHTML = value;
  }
};`;

const renderFnNoOp = 'var render = () => {}';

const useCode = (cellId: EntityId): string =>
  useTypedSelector(
    createSelector(selectCells, (cells) =>
      cells
        .slice(0, cells.findIndex(({ id }) => id === cellId) + 1)
        .filter(({ type }) => type === 'code')
        .map(
          ({ id, content }) =>
            `${id === cellId ? renderFn : renderFnNoOp}\n${content}`
        )
        .join('\n')
    )
  );

export default useCode;
