import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';

import store from './store';
import { Provider } from 'react-redux';

function App() {
  // 我们将经过 createStore 生成的 store 挂载到 react-redux 提供的 Provider 组件上，这个 Provider 的工作任务是：通过 context 向子组件提供 store。
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
