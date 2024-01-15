/**
 * @desc 模板1
 * @author pengdaokuan
 */
import React from 'react';
import './index.less';
import Avatar from './components/Avatar';
import BaseInfo from './components/BaseInfo';
import Contact from './components/Contact';
import Job from './components/Job';
import Certificate from './components/Certificate';
import Synopsis from './components/Synopsis';
import Skill from './components/Skill';
import Post from './components/Post';
import Project from './components/Project';
import Work from './components/Work';

import { useSelector } from 'react-redux';
import { RESUME_TOOLBAR_MAPS } from '@src/common/constants/resume';

function TemplateOne() {
  // 必须带有id，以方便导出时获取DOM元素内容

  // 👇 获取简历信息数据
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  // 👇 获取工具条模块 keys
  const resumeToolbarKeys: string[] = useSelector((state: any) => state.templateModel.resumeToolbarKeys);

  return (
    <div styleName="a4-box">
      <div styleName="flex container" id="visPdf">
        {/* 左侧 */}
        <div styleName="left">
          <div styleName="avatar">
            <Avatar />
          </div>
          <div styleName="fillColor" />
          <div styleName="baseData">
            <BaseInfo />
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.contact) && <Contact />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workPrefer) && <Job />}
            {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.certificate) && <Certificate />}
          </div>
        </div>
        {/* 内容 */}
        <div styleName="center">
          {(resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.evaluation) || base?.username) && <Synopsis />}
          <div styleName="listData">
            <div styleName="listData">
              {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.skill) && <Skill />}
              {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.schoolExperience) && <Post />}
              {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.projectExperience) && <Project />}
              {resumeToolbarKeys.includes(RESUME_TOOLBAR_MAPS.workExperience) && <Work />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateOne;
