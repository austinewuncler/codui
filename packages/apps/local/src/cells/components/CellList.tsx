import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { JSIcon } from '~/common/components';
import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';
import CellActions from './CellActions';
import InsertCell from './InsertCell';
import JSCell from './JSCell';

const CellList = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <InsertCell alwaysVisible={cells.length === 0} />
      </li>
      <AnimatePresence>
        {cells.map(({ id }) => (
          <motion.li
            key={id}
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: 'tween' } }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <article className="overflow-hidden rounded-r-lg rounded-b-lg shadow-md">
              <header className="flex items-center justify-between bg-slate-light pr-4 dark:bg-slate-dark">
                <JSIcon height={48} width={48} />
                <CellActions cellId={id} />
              </header>
              <JSCell />
            </article>
            <InsertCell prevCellId={id} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default CellList;
