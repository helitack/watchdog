import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { GlobalStyle } from '../styles/global-styles';

import { Dashboard } from '../features/dashboard/Loadable';
import { NotFoundPage } from './containers/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

import { QueryCache, ReactQueryCacheProvider } from 'react-query';
const queryCache = new QueryCache();

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <CssBaseline />
        <Helmet
          titleTemplate="%s - Greyhound Monitoring"
          defaultTitle="Greyhound Monitoring"
          htmlAttributes={{ lang: i18n.language }}
        >
          <meta
            name="description"
            content="An example monitoring application"
          />
        </Helmet>

        <Switch>
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            component={Dashboard}
          />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </ReactQueryCacheProvider>
    </BrowserRouter>
  );
}
