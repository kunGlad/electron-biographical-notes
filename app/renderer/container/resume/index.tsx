import React from 'react';
import './index.less';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';

// 三个文件引入;
import ResumeAction from './ResumeAction';
import ResumeContent from './ResumeContent';
import ResumeToolbar from './ResumeToolbar';

function Resume() {
  // 在渲染进程中 发送给主进程 消息
  // getAppPath().then((rootPath: string) => {
  //   console.log('应用程序的目录路径为：', rootPath);
  //   console.log('文件读取, 内容数据位：');
  //   // 这里读取文件路径必须是绝对路径，不能是相对路径./index.tsx
  //   fileAction.read(`${rootPath}/app/renderer/container/resume/index.tsx`).then((data) => {
  //     console.log(data);
  //   });
  // });

  // return <div>我是简历模块</div>;
  return (
    <div styleName="container">
      <div styleName="header">
        <ResumeAction />
      </div>
      <div styleName="content">
        <ResumeContent />
      </div>
      <div styleName="toolbar">
        <ResumeToolbar />
      </div>
    </div>
  );
}

export default Resume;

// import React from 'react';
// import './index.less';

// export default Resume;
