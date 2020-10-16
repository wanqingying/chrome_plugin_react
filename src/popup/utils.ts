import { useEffect, useState } from 'react';

export function useSyncStorageGet(key: string[]) {
  const [state, setState] = useState({} as any);
  const [up, setUp] = useState(0);
  useEffect(() => {
    chrome.storage.sync.get(key, function (items) {
      setState(items);
    });
  }, [up, key]);
  function setSync(obj: any) {
    chrome.storage.sync.set(obj, function () {
      setState(obj);
      setUp(up + 1);
    });
  }
  return [state, setSync];
}
