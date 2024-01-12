import React from 'react';
import classnames from 'classnames';
import './index.less';

export interface IButton {
  size?: 'middle' | 'big' | 'small';
  width?: number;
  style?: React.CSSProperties;
  /**
   * @description 子组件
   */
  children?: React.ReactNode | any;
  disabled?: boolean;
  className?: string;
  onClick?: Function;
  /**
   * @description 是否显示边框
   */
  border?: boolean;
}

function Button({ size = 'small', style, width, children, disabled, className, onClick, border = true }: IButton) {
  return (
    <div
      style={{ ...style, width: width }}
      className={className}
      styleName={classnames('es-button', {
        [`es-button-${size}`]: true,
        'es-button-disabled': disabled,
        'es-button-border': border,
      })}
      onClick={() => {
        onClick && onClick();
      }}
    >
      {children}
    </div>
  );
}

export default Button;
