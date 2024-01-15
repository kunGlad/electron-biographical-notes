/**
 * @description 在校经历Form
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
function SchoolExperience({ onClose }: IProps) {
  console.log('在校经历');
  const schoolExperience: TSResume.SchoolExperience[] = useSelector((state: any) => state.resumeModel.schoolExperience);

  return (
    <Modal.Dialog
      title="在校经历"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.school(schoolExperience)}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default SchoolExperience;
