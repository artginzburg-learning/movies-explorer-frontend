import { useEffect } from 'react';

import { PATHNAMES } from '../utils/constants';

const defaultTitle = PATHNAMES.global.title;

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} · ${defaultTitle}` : defaultTitle;
  }, [title]);
};
