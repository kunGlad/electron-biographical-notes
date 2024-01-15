/**
 * @description 编辑简历-工具条模块
 */
import React from 'react';
import './index.less';
import MyScrollBox from '@src/common/components/ScrollBox';
import RESUME_TOOLBAR_LIST from '@src/common/constants/resume';
import Work from '@assets/icon/work.png';

function ResumeToolbar() {
  const height = document.body.clientHeight;
  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        <div styleName="module">
          <div styleName="title">
            <span styleName="line" />
            全部模块
          </div>
          <div styleName="content">
            {RESUME_TOOLBAR_LIST.map((toolbar: TSResume.SliderItem) => {
              return (
                <div styleName="box" key={toolbar.key}>
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary">{toolbar.summary}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;
