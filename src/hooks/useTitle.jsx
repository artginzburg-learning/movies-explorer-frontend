import { useEffect } from 'react';

const defaultTitle = 'Movies Explorer';

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} · ${defaultTitle}` : defaultTitle;
  }, [title]);
};
