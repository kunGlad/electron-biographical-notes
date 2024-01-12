import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';
// import Logo from '@assets/logo.jpg';
import { ROUTER_ENTRY } from '@src/common/constants/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/router';
import { useSelector, useDispatch } from 'react-redux';

function Root() {
  const history = useHistory();
  const appName = useSelector((state: any) => state.globalModel.appName);
  const dispatch = useDispatch();

  console.log('appName=', appName);

  function onRouterToLink(router: TSRouter.Item) {
    if (isHttpOrHttpsUrl(router.url)) {
      // 通过shell模块， 打开默认浏览器，进入github
      shell.openExternal(router.url);
    } else {
      history.push(router.url);
    }
  }

  return (
    <div styleName="root">
      <div styleName="container">
        {/* <img src={Logo} alt="" /> */}
        <div styleName="title">electron-biographical-notes</div>
        <div styleName="tips">一个模版简历制作平台，让你的简历更出众~</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => onRouterToLink(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          Copyright © 2024-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
        </div>
      </div>
    </div>
  );
}

export default Root;
