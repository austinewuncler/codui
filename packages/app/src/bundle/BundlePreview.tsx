import type { EntityId } from '@reduxjs/toolkit';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef } from 'react';
import { useUpdateEffect } from 'usehooks-ts';

import { Loading } from '~/common/components';

import useBundle from './useBundle';

const PREVIEW_HTML = `<html>
  <head> </head>
  <body>
    <div id="root"></div>
    <script>
      const showError = ({ name, message }) => {
        const rootEl = document.getElementById('root');
        rootEl.style.color = '#f43f5e';
        rootEl.style.fontFamily = 'sans-serif';
        rootEl.style.fontSize = '14px';
        rootEl.innerHTML = \`
          <div>
            <h3>\${name}</h3>
            <p>\${message}</p>
          </div>
        \`;
      };
      window.addEventListener('error', ({ error }) => {
        event.preventDefault();
        showError(error);
      });
      window.addEventListener('message', ({ data }) => {
        try {
          eval(data);
        } catch (err) {
          showError(err);
        }
      });
    </script>
  </body>
</html>`;

interface Props {
  cellId: EntityId;
}

const BundlePreview = ({ cellId }: Props): JSX.Element => {
  const { isLoading, error, content } = useBundle(cellId);
  const iFrameRef = useRef<HTMLIFrameElement>(null);

  useUpdateEffect(() => {
    if (iFrameRef.current != null) iFrameRef.current.srcdoc = PREVIEW_HTML;

    const timeout = setTimeout(() => {
      if (iFrameRef.current?.contentWindow != null && content != null)
        iFrameRef.current.contentWindow.postMessage(content, '*');
    }, 50);

    return () => {
      clearTimeout(timeout);
    };
  }, [content]);

  return (
    <div className="relative flex-auto bg-slate-light p-4 transition-colors dark:bg-slate-dark">
      {isLoading ? (
        <div className="absolute inset-0">
          <Loading />
        </div>
      ) : (
        <AnimatePresence>
          {error != null ? (
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                key={`${cellId}-${error}`}
                className="bg-red p-4 text-white"
                initial={{ y: '-100%' }}
                animate={{ y: 0, transition: { type: 'tween' } }}
                exit={{ y: '-100%', transition: { type: 'tween' } }}
              >
                {error.match(/ERROR: (?<errMsg>.*)$/)?.groups?.['errMsg']}
              </motion.div>
            </div>
          ) : (
            ''
          )}
        </AnimatePresence>
      )}

      <iframe
        ref={iFrameRef}
        title="bundle preview"
        className="h-full w-full rounded-md bg-white"
        sandbox="allow-scripts"
      />
    </div>
  );
};

export default BundlePreview;
