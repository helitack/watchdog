import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const Dashboard = lazyLoad(
  () => import('./Dashboard'),
  module => module.Dashboard,
  {
    fallback: <LoadingIndicator />,
  },
);
