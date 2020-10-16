import React, { FC } from 'react';
import { useSyncStorageGet } from '../utils';

interface Props {}
export const TabLinks: FC<Props> = function (_props) {
  const [state] = useSyncStorageGet(['dev_path']);
  return (
    <div>
      <p>links</p>
      <p>{state.dev_path}</p>
    </div>
  );
};
