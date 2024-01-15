import React from 'react';
import './index.less';
import { useHistory } from 'react-router';
import ROUTER_URL from '@src/common/constants/router';
import Button from '@src/common/components/Button';

function ResumeAction() {
  const history = useHistory();

  const onBack = () => {
    history.push(ROUTER_URL.root);
  };
  const onExport = () => {};

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <Button size="middle" className="export-btn" onClick={onExport}>
        导出PDF
      </Button>
    </div>
  );
}
export default ResumeAction;
