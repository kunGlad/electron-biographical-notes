import React from 'react';
import './index.less';

// 👇 引入简历模版
import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@src/common/components/ScrollBox';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  return (
    <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
    </ScrollBox>
  );
}
export default ResumeContent;
