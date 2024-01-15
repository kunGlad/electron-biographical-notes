import React, { useEffect, useState } from 'react';
import './index.less';

// 👇 引入简历模版
import * as UseTemplateList from './UseTemplate';
import ScrollBox from '@src/common/components/ScrollBox';
import Messager, { MESSAGE_EVENT_NAME_MAPS } from '@src/common/messager';

// 👇 引入我们写的表单弹窗组件
import CertificateForm from './UseForm/Certificate';
import ContactForm from './UseForm/Contact';
import EducationForm from './UseForm/Education';
import PersonalForm from './UseForm/Personal';
import SkillForm from './UseForm/Skill';
import WorkForm from './UseForm/Work';
import { RESUME_TOOLBAR_MAPS } from '@src/common/constants/resume';

function ResumeContent() {
  const HEADER_ACTION_HEIGHT = 92;
  const height = document.body.clientHeight;

  // 👇 定义 state 值
  const [formName, setFormName] = useState('');
  const [showFormModal, setShowFormModal] = useState(false);

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
    Messager.receive(e, (data: any) => {
      // console.log('发布订阅，传参值为: ', data);
      setShowFormModal(true);
      setFormName(data?.form_name);
    });
  };

  const onClose = () => {
    setShowFormModal(false);
    setFormName('');
  };

  return (
    <ScrollBox maxHeight={height - HEADER_ACTION_HEIGHT}>
      <UseTemplateList.TemplateOne />
      {showFormModal && (
        <>
          {formName === RESUME_TOOLBAR_MAPS.personal && <PersonalForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.contact && <ContactForm onClose={onClose} />}
          {formName === RESUME_TOOLBAR_MAPS.workPrefer && <WorkForm onClose={onClose} />}

          {formName === RESUME_TOOLBAR_MAPS.certificate && <CertificateForm onClose={onClose} />}

          {formName === RESUME_TOOLBAR_MAPS.education && <EducationForm onClose={onClose} />}

          {formName === RESUME_TOOLBAR_MAPS.skill && <SkillForm onClose={onClose} />}
        </>
      )}
    </ScrollBox>
  );
}
export default ResumeContent;
