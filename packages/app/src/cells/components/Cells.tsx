import { motion } from 'framer-motion';
import React from 'react';

import { useTypedSelector } from '~/common/hooks';

import { selectCells } from '../cells.reducer';
import CodeCell from './CodeCell';
import InsertCell from './InsertCell';
import MarkdownCell from './MarkdownCell';

const Cells = (): JSX.Element => {
  const cells = useTypedSelector(selectCells);

  return (
    <ul className="flex flex-col gap-4">
      <li>
        <InsertCell prevCellId={null} />
      </li>
      {cells.map(({ id, type }) => (
        <motion.li
          key={id}
          className="flex flex-col gap-4"
          layout
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{
            opacity: 1,
            scaleY: 1,
            transformOrigin: 'top',
            transition: { type: 'tween' },
          }}
        >
          <article className="overflow-hidden rounded-lg">
            <header className="h-12 bg-primary-light transition-colors dark:bg-primary-dark" />
            {type === 'code' ? <CodeCell /> : <MarkdownCell />}
          </article>
          <InsertCell prevCellId={id} />
        </motion.li>
      ))}
    </ul>
  );
};

export default Cells;
