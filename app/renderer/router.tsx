import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Root from '@src/container/root';
import Resume from '@src/container/resume';

function Router() {
  return (
    <HashRouter>
      <Switch>
        {/* 一定要添加exact */}

        <Route path="/" exact>
          {/* 首页 */}
          <Root />
        </Route>
        <Route path="/resume" exact>
          {/* 简历模块 */}
          <Resume />
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to="/" />
    </HashRouter>
  );
}

export default Router;
