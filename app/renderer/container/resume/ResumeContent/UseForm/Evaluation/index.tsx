/**
 * @description 个人评价Form
 */
import React from 'react';
import './index.less';
import Modal from '@src/common/components/Modal';
import Input from '@src/common/components/Input';
import { useSelector } from 'react-redux';

interface IProps {
  onClose: () => void;
}

function Evaluation({ onClose }: IProps) {
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);

  return (
    <Modal.Dialog
      title="个人评价"
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
            <span styleName="require">*</span>评 价 ：
          </div>
          <div styleName="right">
            <Input
              type="textarea"
              onChange={(e) => {}}
              rows={5}
              value={evaluation || ''}
              placeholder="夸一夸自己有什么亮点"
              allowClear={true}
            />
            <div styleName="tips"> * 可通过 | 分割</div>
          </div>
        </div>
      </div>
    </Modal.Dialog>
  );
}

export default Evaluation;
