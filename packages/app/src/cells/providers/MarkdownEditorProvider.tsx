import React, {
  type PropsWithChildren,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { markdownEditorContext } from '../contexts';

interface Props {
  isActive: boolean;
}

const MarkdownEditorProvider = ({
  isActive,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [isEditing, setIsEditing] = useState(isActive);

  useOnClickOutside(ref, () => {
    if (isEditing) setIsEditing(false);
  });

  const enableEditing = useCallback(() => {
    setIsEditing(true);
  }, []);

  const context = useMemo(
    () => ({ isEditing, enableEditing }),
    [isEditing, enableEditing]
  );

  return (
    <markdownEditorContext.Provider value={context}>
      <div ref={ref}>{children}</div>
    </markdownEditorContext.Provider>
  );
};

export default MarkdownEditorProvider;
