/**
 * @description 联系方式Form
 */
import React from 'react';
import './index.less';
import Modal from '@src/common/components/Modal';
import Input from '@src/common/components/Input';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}
function Contact({ onClose }: IProps) {
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  return (
    <Modal.Dialog
      title="联系方式"
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
            <span styleName="require">*</span>电 话 ：
          </div>
          <div styleName="right">
            <Input onChange={(e) => {}} value={contact?.phone || ''} placeholder="请输入电话号码" allowClear={true} />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>邮 箱 ：
          </div>
          <div styleName="right">
            <Input onChange={(e) => {}} value={contact?.email || ''} placeholder="请输入邮箱" allowClear={true} />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div styleName="right">
            <Input onChange={(e) => {}} value={contact?.github || ''} placeholder="Github 地址" allowClear={true} />
          </div>
        </div>
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require" style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div styleName="right">
            <Input onChange={(e) => {}} value={contact?.juejin || ''} placeholder="掘金地址" allowClear={true} />
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Contact;
