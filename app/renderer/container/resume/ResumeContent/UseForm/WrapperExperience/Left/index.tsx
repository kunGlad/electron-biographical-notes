/**
 * @description 专门服务于经验弹窗左侧
 */
import React from 'react';
import './index.less';
import Button from '@src/common/components/Button';
import ScrollBox from '@src/common/components/ScrollBox';
import List, { IListProps } from './List';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <div styleName="layout-left">
      {experienceList.length > 0 && (
        <>
          <ScrollBox maxHeight={420}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </ScrollBox>
          <div styleName="action">
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div styleName="empty">
          <div styleName="empty-tips">还没有内容，快添加一下吧～</div>
          <div styleName="empty-action">
            <Button width={112} size="middle" onClick={onAdd}>
              添加条目
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;
