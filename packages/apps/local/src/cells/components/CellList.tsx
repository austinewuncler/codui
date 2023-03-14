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
        {cells.map(({ id, code }) => (
          <motion.li
            key={id}
            layout
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1, transition: { type: 'tween' } }}
            exit={{ scale: 0, opacity: 0 }}
            className="flex flex-col gap-4"
          >
            <article className="overflow-hidden rounded border border-neutral-light dark:border-neutral-dark">
              <header className="flex h-12 items-center justify-between border-b border-neutral-light bg-neutral-lightest px-4 dark:border-neutral-dark dark:bg-neutral-darkest">
                <JSIcon height={36} width={36} />
                <CellActions cellId={id} />
              </header>
              <JSCell cellId={id} code={code} />
            </article>
            <InsertCell prevCellId={id} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default CellList;
