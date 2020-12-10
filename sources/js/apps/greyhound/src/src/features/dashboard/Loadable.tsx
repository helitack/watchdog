import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const Dashboard = lazyLoad(
  () => import('./index'),
  module => module.Dashboard,
  {
    fallback: <LoadingIndicator />,
  },
);
