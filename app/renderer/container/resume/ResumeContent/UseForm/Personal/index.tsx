/**
 * @description 个人信息Form
 */
import React from 'react';
import './index.less';
import Modal from '@src/common/components/Modal';
import Input from '@src/common/components/Input';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}
function Personal({ onClose }: IProps) {
  const hobby: string = useSelector((state: any) => state.resumeModel.hobby);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return (
    <Modal.Dialog
      title="个人信息"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>姓 名 ：
          </div>
          <div styleName="right">
            <Input onChange={(e) => {}} value={base?.username || ''} placeholder="请输入姓名" allowClear={true} />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>籍 贯 ：
          </div>
          <div styleName="right">
            <Input onChange={(e) => {}} value={base?.hometown || ''} placeholder="请输入籍贯" allowClear={true} />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            爱 好 ：
          </div>
          <div styleName="right">
            <Input
              type="textarea"
              onChange={(e) => {}}
              rows={5}
              value={hobby || ''}
              placeholder="你有什么特长爱好呢"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Personal;
