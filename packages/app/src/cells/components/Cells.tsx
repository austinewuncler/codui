import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { useTypedSelector } from '~/common/hooks';

import { selectCells } from '../reducers';
import CellActionButton from './CellActionButton';
import CodeCell from './CodeCell';
import InsertCell from './InsertCell';
import MarkdownCell from './MarkdownCell';

const Cells = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <InsertCell prevCellId={null} alwaysVisible={cells.length === 0} />
      </li>
      <AnimatePresence>
        {cells.map(({ id, type, content }) => (
          <motion.li
            key={id}
            className="flex flex-col gap-4"
            layout
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
          >
            <article className="overflow-hidden rounded-lg shadow-md">
              <header className="flex h-12 items-center justify-between bg-primary-light px-4 transition-colors dark:bg-primary-dark">
                <CellActionButton cellId={id} action="formatCellContent" />
                <div className="flex gap-1">
                  <CellActionButton cellId={id} action="moveCellUp" />
                  <CellActionButton cellId={id} action="moveCellDown" />
                  <CellActionButton cellId={id} action="deleteCell" />
                </div>
              </header>
              {type === 'code' ? (
                <CodeCell cellId={id} content={content} />
              ) : (
                <MarkdownCell cellId={id} content={content} />
              )}
            </article>
            <InsertCell prevCellId={id} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default Cells;
