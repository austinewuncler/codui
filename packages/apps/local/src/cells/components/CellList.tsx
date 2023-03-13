import { AnimatePresence, motion } from 'framer-motion';
import { Resizable } from 're-resizable';
import React from 'react';

import { JSIcon } from '~/common/components';
import { useTypedSelector } from '~/common/providers';

import { selectCells } from '../reducer';
import CellActions from './CellActions';
import InsertCell from './InsertCell';

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
              <Resizable
                className="flex"
                defaultSize={{ width: 'auto', height: 'auto' }}
                minHeight={200}
                enable={{ bottom: true }}
                handleStyles={{ bottom: { cursor: 'ns-resize' } }}
              >
                <Resizable
                  className="border-r border-slate-light dark:border-slate-dark"
                  defaultSize={{ width: '50%', height: 'auto' }}
                  minWidth="25%"
                  maxWidth="75%"
                  enable={{ right: true }}
                  handleStyles={{ right: { cursor: 'ew-resize' } }}
                >
                  <div className="h-full" />
                </Resizable>
                <div className="flex-auto"></div>
              </Resizable>
            </article>
            <InsertCell prevCellId={id} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default CellList;
