'use client';
import React, { forwardRef } from 'react';
import StyledTab from './StyledTab';
import { BaseTabProps } from '../types/tab.types';

interface CustomTabProps extends BaseTabProps {
  variant?: 'rounded' | 'underline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
}

const CustomTab = forwardRef<HTMLDivElement, CustomTabProps>(
  ({ 
    variant = 'rounded', 
    size = 'md',
    ...props 
  }, ref) => {
    return (
      <StyledTab
        ref={ref}
        variant={variant}
        size={size}
        {...props}
      />
    );
  }
);

CustomTab.displayName = 'CustomTab';
export default CustomTab;