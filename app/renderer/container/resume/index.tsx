import React from 'react';
import './index.less';
import fileAction from '@src/common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';

function Resume() {
  // 在渲染进程中 发送给主进程 消息
  getAppPath().then((rootPath: string) => {
    console.log('应用程序的目录路径为：', rootPath);
    console.log('文件读取, 内容数据位：');
    // 这里读取文件路径必须是绝对路径，不能是相对路径./index.tsx
    fileAction.read(`${rootPath}/app/renderer/container/resume/index.tsx`).then((data) => {
      console.log(data);
    });
  });

  return <div>我是简历模块</div>;
}

export default Resume;
