/**
 * @description 编辑简历-工具条模块
 */
import React, { useEffect, useState } from 'react';
import './index.less';
import MyScrollBox from '@src/common/components/ScrollBox';
import RESUME_TOOLBAR_LIST from '@src/common/constants/resume';

// 👇 改造后的逻辑
import { onAddToolbar, onDeleteToolbar } from './utils';

function ResumeToolbar() {
  const height = document.body.clientHeight;

  // 👇 定义已添加模块与未添加模块
  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  // 添加模块
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    // 必选项不能删除
    if (!moduleSlider.require) {
      const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
      setAddToolbarList(nextAddSliderList);
      const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
      setUnAddToolbarList(nextUnAddSliderList);
    }
  };

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      const _addToolbarList: TSResume.SliderItem[] = [];
      const _unAddToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s) => {
        if (s.require) _addToolbarList.push(s);
        if (!s.require) _unAddToolbarList.push(s);
      });
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
    }
  }, []);

  return (
    <div styleName="slider">
      <MyScrollBox maxHeight={height - 180}>
        <div styleName="module">
          <div styleName="title">
            <span styleName="line" />
            已添加模块
          </div>
          <div styleName="content">
            {addToolbarList.map((toolbar: TSResume.SliderItem) => {
              return (
                <div styleName="box" key={toolbar.key} onClick={() => onDeleteSliderAction(toolbar)}>
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
        {!!unAddToolbarList.length && (
          <div styleName="module">
            <div styleName="title">
              <span styleName="line" />
              未添加模块
            </div>
            <div styleName="content">
              {unAddToolbarList.map((toolbar: TSResume.SliderItem) => {
                return (
                  <div styleName="box" key={toolbar.key} onClick={() => onAddSliderAction(toolbar)}>
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
        )}
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;
