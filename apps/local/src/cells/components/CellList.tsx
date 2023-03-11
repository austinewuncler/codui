import { motion } from 'framer-motion';
import React from 'react';

import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';
import InsertCell from './InsertCell';
import JavaScriptCell from './JavaScriptCell';

const CellList = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <InsertCell alwaysVisible={cells.length === 0} />
      </li>
      {cells.map(({ id, syntax }) => (
        <motion.li
          key={id}
          layout
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, transition: { type: 'tween' } }}
          className="flex flex-col gap-4"
        >
          <article>
            <JavaScriptCell />
          </article>
          <InsertCell prevCellId={id} />
        </motion.li>
      ))}
    </ul>
  );
};

export default CellList;
