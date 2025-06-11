import React, { forwardRef } from 'react';
import { cn } from './utils';
import { BaseInputProps, InputState } from './types';

const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  ({ 
    label, 
    error = false, 
    state, 
    size = 'medium', 
    className, 
    value,
    defaultValue,
    disabled,
    ...props 
  }, ref) => {
    // 상태 자동 감지 로직
    const getInputState = (): InputState => {
      if (state) return state;
      if (error) return 'error';
      if (value || defaultValue) return 'filled';
      return 'empty';
    };

    const currentState = getInputState();

    // 스타일 정의
    const baseStyles = {
      input: "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      states: {
        empty: "bg-white border-gray-300",
        filled: "bg-white border-gray-400",
        active: "border-blue-500 ring-2 ring-blue-500",
        error: "border-red-500 bg-red-50 focus:ring-red-500"
      },
      sizes: {
        small: "py-1.5 px-2 text-xs",
        medium: "py-2 px-3 text-sm",
        wide: "py-3 px-4 text-base"
      },
      disabled: "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          className={cn(
            baseStyles.input,
            baseStyles.states[currentState],
            baseStyles.sizes[size],
            disabled && baseStyles.disabled,
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

BaseInput.displayName = 'BaseInput';
export default BaseInput;