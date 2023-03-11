import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';
import CellActions from './CellActions';
import InsertCell from './InsertCell';
import JavaScriptCell from './JavaScriptCell';

const CellList = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <InsertCell alwaysVisible={cells.length === 0} />
      </li>
      <AnimatePresence>
        {cells.map(({ id, syntax }) => (
          <motion.li
            key={id}
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: 'tween' } }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <article className="shadow-md">
              <header className="flex h-10 justify-end bg-neutral-light px-4 dark:bg-neutral-dark">
                <CellActions cellId={id} />
              </header>
              <JavaScriptCell />
            </article>
            <InsertCell prevCellId={id} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default CellList;
