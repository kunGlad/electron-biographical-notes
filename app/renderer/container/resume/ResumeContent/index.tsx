import React, { useEffect } from 'react';
import './index.less';

// 👇 引入简历模版
import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@src/common/components/ScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@src/common/messager';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  // 👇 监听此事件
  useEffect(() => {
    document.addEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    return () => {
      document.removeEventListener(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, onReceive);
    };
  }, []);

  /**
   * @description 接收订阅事件的传参
   */
  const onReceive = (e: any) => {
    console.log(11111);
    Messager.receive(e, (data: any) => {
      console.log('发布订阅，传参值为: ', data);
    });
  };

  return (
    <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </ScrollBox>
  );
}
export default ResumeContent;
