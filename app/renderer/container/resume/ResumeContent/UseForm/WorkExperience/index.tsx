/**
 * @description 工作经历Form
 */
import React from 'react';
import Modal from '@src/common/components/Modal';
import Form from './Form';
import { useSelector } from 'react-redux';
import Wrapper from '../WrapperExperience';
import AdapterExperience, { AdapterExperienceType } from '../WrapperExperience/adapter';

interface IProps {
  onClose: () => void;
}
function WorkExperience({ onClose }: IProps) {
  const workExperience: TSResume.WorkExperience[] = useSelector((state: any) => state.resumeModel.workExperience);

  return (
    <Modal.Dialog
      title="工作经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.work(workExperience)}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default WorkExperience;
