import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Root from './container/root';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加exact */}
        <Route path="/" exact>
          <Root />
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to="/" />
    </HashRouter>
  );
}

export default Router;
