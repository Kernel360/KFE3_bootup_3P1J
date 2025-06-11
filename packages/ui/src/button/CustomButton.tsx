'use client';
import React, { forwardRef } from 'react';
import BaseButton from './BaseButton';
import { BaseButtonProps } from '../types/button.types';

interface CustomButtonProps extends BaseButtonProps {
  // 추가적인 비즈니스 로직이 필요한 경우 여기에 정의
}

const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  (props, ref) => {
    // 비즈니스 로직이 필요한 경우 여기에 추가
    // 예: 분석 이벤트 전송, 권한 체크 등
    
    return <BaseButton ref={ref} {...props} />;
  }
);

CustomButton.displayName = 'CustomButton';
export default CustomButton;