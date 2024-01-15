/**
 * @description 项目经验Form
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
function ProjectExperience({ onClose }: IProps) {
  const projectExperience: TSResume.ProjectExperience[] = useSelector(
    (state: any) => state.resumeModel.projectExperience
  );

  return (
    <Modal.Dialog
      title="项目经验"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
      width={960}
      childStyle={{ padding: 0 }}
    >
      <Wrapper dataList={AdapterExperience.project(projectExperience)}>
        <Form />
      </Wrapper>
    </Modal.Dialog>
  );
}

export default ProjectExperience;
