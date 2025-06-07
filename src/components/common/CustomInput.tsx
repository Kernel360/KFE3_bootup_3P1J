'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { FaLock, FaUser } from 'react-icons/fa';
import { IoSearchSharp } from 'react-icons/io5';
import { BiHide } from 'react-icons/bi';
import { RxEyeOpen } from 'react-icons/rx';
import { cn } from '@/lib/utils';

type InputState = 'empty' | 'filled' | 'error' | 'active';

interface CustomInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'basic' | 'user' | 'search' | 'password';
  label?: string;
  state?: InputState;
  error?: boolean;
  size?: 'small' | 'wide';
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      variant = 'basic',
      label,
      state,
      error = false,
      size,
      className,
      type,
      value,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [internalValue, setInternalValue] = useState<string | number | readonly string[]>(
      value || defaultValue || '',
    );
    const [isFocused, setIsFocused] = useState<boolean>(false);

    // 실제 상태 결정 로직
    const getActualState = (): InputState => {
      if (state) return state; // props로 state가 명시적으로 전달된 경우
      if (error) return 'error';
      if (isFocused) return 'active';
      if (internalValue && internalValue.toString().length > 0) return 'filled';
      return 'empty';
    };

    const actualState = getActualState();

    // 기본 스타일 클래스
    const getBaseClasses = (): string => {
      const heightClass = 'h-[54px]';
      const baseClasses = `${heightClass} rounded-full border transition-all duration-200 text-medium font-regular`;

      return baseClasses;
    };

    // 상태별 스타일
    const getStateClasses = (currentState: InputState): string => {
      const baseClasses = getBaseClasses();

      switch (currentState) {
        case 'empty':
          return `${baseClasses} text-neutral-60 placeholder:text-neutral-60`;
        case 'filled':
          return `${baseClasses} text-neutral-100 placeholder:text-neutral-60`;
        case 'error':
          return `${baseClasses} text-danger-500 placeholder:text-danger-500`;
        case 'active':
          return `${baseClasses} text-primary-500 placeholder:text-neutral-60`;
        default:
          return baseClasses;
      }
    };

    // 상태별 인라인 스타일
    const getStateStyles = (currentState: InputState): React.CSSProperties => {
      switch (currentState) {
        case 'empty':
          return {
            backgroundColor: 'var(--color-neutral-10)',
            borderColor: 'var(--color-neutral-30)',
            color: 'var(--color-neutral-60)',
          };
        case 'filled':
          return {
            backgroundColor: 'var(--color-neutral-10)',
            borderColor: 'var(--color-neutral-100)',
            color: 'var(--color-neutral-100)',
          };
        case 'error':
          return {
            backgroundColor: 'var(--color-danger-100)',
            borderColor: 'var(--color-danger-500)',
            color: 'var(--color-danger-500)',
          };
        case 'active':
          return {
            backgroundColor: 'var(--color-neutral-10)',
            borderColor: 'var(--color-primary-500)',
            color: 'var(--color-primary-500)',
          };
        default:
          return {};
      }
    };

    // 사이즈별 너비 클래스
    const getSizeClasses = (): string => {
      switch (size) {
        case 'small':
          return 'w-[220px]';
        case 'wide':
          return 'w-[440px]';
        default:
          return 'w-full';
      }
    };

    // 아이콘 색상
    const getIconColor = (currentState: InputState): string => {
      switch (currentState) {
        case 'empty':
          return 'text-neutral-60';
        case 'filled':
          return 'text-neutral-100';
        case 'error':
          return 'text-danger-500';
        case 'active':
          return 'text-primary-500';
        default:
          return 'text-neutral-60';
      }
    };

    // 아이콘 인라인 스타일
    const getIconStyles = (currentState: InputState): React.CSSProperties => {
      switch (currentState) {
        case 'empty':
          return { color: 'var(--color-neutral-60)' };
        case 'filled':
          return { color: 'var(--color-neutral-100)' };
        case 'error':
          return { color: 'var(--color-danger-500)' };
        case 'active':
          return { color: 'var(--color-primary-500)' };
        default:
          return { color: 'var(--color-neutral-60)' };
      }
    };

    // 라벨 색상
    const getLabelColor = (currentState: InputState): string => {
      switch (currentState) {
        case 'error':
          return 'text-danger-500';
        default:
          return 'text-neutral-100';
      }
    };

    // 라벨 인라인 스타일
    const getLabelStyles = (currentState: InputState): React.CSSProperties => {
      switch (currentState) {
        case 'error':
          return { color: 'var(--color-danger-500)' };
        default:
          return { color: 'var(--color-neutral-100)' };
      }
    };

    // 아이콘 렌더링
    const renderIcon = (): React.ReactElement | null => {
      const iconClass = cn(
        'absolute top-1/2 transform -translate-y-1/2 w-4 h-4 transition-colors',
        getIconColor(actualState),
        variant === 'search' ? 'right-3' : 'left-3',
      );

      const iconStyles = getIconStyles(actualState);

      switch (variant) {
        case 'user':
          return <FaUser className={iconClass} style={iconStyles} />;
        case 'search':
          return <IoSearchSharp className={iconClass} style={iconStyles} />;
        case 'password':
          return <FaLock className={iconClass} style={iconStyles} />;
        default:
          return null;
      }
    };

    // 비밀번호 토글 버튼
    const renderPasswordToggle = (): React.ReactElement | null => {
      if (variant === 'password') {
        const toggleClass = cn(
          'w-4 h-4 transition-colors cursor-pointer hover:scale-110',
          getIconColor(actualState),
        );
        const iconStyles = getIconStyles(actualState);

        return (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 focus:outline-none"
          >
            {showPassword ? (
              <RxEyeOpen className={toggleClass} style={iconStyles} />
            ) : (
              <BiHide className={toggleClass} style={iconStyles} />
            )}
          </button>
        );
      }
      return null;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInternalValue(e.target.value);
      if (props.onChange) {
        props.onChange(e);
      }
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>): void => {
      setIsFocused(true);
      if (props.onFocus) {
        props.onFocus(e);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
      setIsFocused(false);
      if (props.onBlur) {
        props.onBlur(e);
      }
    };

    const inputType = variant === 'password' ? (showPassword ? 'text' : 'password') : type;
    const hasLeftIcon = variant === 'user' || variant === 'password';
    const hasRightIcon = variant === 'search' || variant === 'password';

    return (
      <div className={cn('flex flex-col', getSizeClasses())}>
        {label && (
          <label
            className={cn(
              'block text-small font-medium mb-2 transition-colors',
              getLabelColor(actualState),
            )}
            style={getLabelStyles(actualState)}
          >
            {label}
          </label>
        )}
        <div className="relative">
          {renderIcon()}
          <Input
            ref={ref}
            type={inputType}
            value={value}
            defaultValue={defaultValue}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{
              ...getStateStyles(actualState),
              outline: 'none',
              boxShadow: 'none',
            }}
            className={cn(
              getStateClasses(actualState),
              'focus:outline-none focus:ring-0 focus:border-transparent focus:shadow-none',
              hasLeftIcon && !hasRightIcon && 'pl-10 pr-4', // 왼쪽 아이콘만
              !hasLeftIcon && hasRightIcon && 'pl-4 pr-10', // 오른쪽 아이콘만
              hasLeftIcon && hasRightIcon && 'pl-10 pr-10', // 양쪽 아이콘
              !hasLeftIcon && !hasRightIcon && 'px-4', // 아이콘 없음
              className,
            )}
            {...props}
          />
          {renderPasswordToggle()}
        </div>
      </div>
    );
  },
);

CustomInput.displayName = 'CustomInput';

export default CustomInput;
export type { CustomInputProps, InputState };
