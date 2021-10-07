import { useEffect } from 'react';

import { pathNames } from '../utils/constants';

const defaultTitle = pathNames.global.title;

export const useTitle = (title) => {
  useEffect(() => {
    document.title = title ? `${title} · ${defaultTitle}` : defaultTitle;
  }, [title]);
};
