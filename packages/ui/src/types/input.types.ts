import React from 'react';

export type InputVariant = 'basic' | 'user' | 'search' | 'password';
export type InputState = 'empty' | 'filled' | 'error' | 'active';
export type InputSize = 'small' | 'medium' | 'wide';
export type IconPosition = 'left' | 'right' | 'both';

export interface BaseInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: boolean;
  state?: InputState;
  size?: InputSize;
  className?: string;
}

export interface IconInputProps extends BaseInputProps {
  iconPosition?: IconPosition;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onIconClick?: (position: 'left' | 'right') => void;
}

export interface CustomInputProps extends BaseInputProps {
  variant?: InputVariant;
}