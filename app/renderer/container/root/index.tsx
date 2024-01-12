import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import { shell } from 'electron';

function Root() {
  const history = useHistory();

  function onRouterToLink(text: string) {
    if (text !== '简历') {
      // 通过shell模块， 打开默认浏览器，进入github
      shell.openExternal('https://github.com/kunGlad/electron-biographical-notes');
    } else {
      history.push('/resume');
    }
  }

  return (
    <div styleName="root">
      <div styleName="container">
        {/* <img src={Logo} alt="" /> */}
        <div styleName="title">electron-biographical-notes</div>
        <div styleName="tips">一个模版简历制作平台，让你的简历更出众~</div>
        <div styleName="action">
          {['介绍', '简历', '源码'].map((text, index) => {
            return (
              <div key={index} styleName="item" onClick={() => onRouterToLink(text)}>
                {text}
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
