import React, { forwardRef } from 'react';
import { cn } from './utils';
import { IconInputProps, InputState } from './types';

const IconInput = forwardRef<HTMLInputElement, IconInputProps>(
  ({
    label,
    error = false,
    state,
    size = 'medium',
    className,
    value,
    defaultValue,
    disabled,
    iconPosition = 'left',
    leftIcon,
    rightIcon,
    onIconClick,
    ...props
  }, ref) => {
    // 상태 자동 감지
    const getInputState = (): InputState => {
      if (state) return state;
      if (error) return 'error';
      if (value || defaultValue) return 'filled';
      return 'empty';
    };

    const currentState = getInputState();

    // 스타일 정의
    const styles = {
      container: "relative w-full",
      input: "w-full border border-gray-300 rounded-lg text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
      states: {
        empty: "bg-white border-gray-300",
        filled: "bg-white border-gray-400", 
        active: "border-blue-500 ring-2 ring-blue-500",
        error: "border-red-500 bg-red-50 focus:ring-red-500"
      },
      sizes: {
        small: {
          input: "py-1.5 text-xs",
          padding: {
            left: leftIcon ? "pl-8" : "pl-2",
            right: rightIcon ? "pr-8" : "pr-2",
            both: "px-8"
          }
        },
        medium: {
          input: "py-2 text-sm",
          padding: {
            left: leftIcon ? "pl-10" : "pl-3",
            right: rightIcon ? "pr-10" : "pr-3", 
            both: "px-10"
          }
        },
        wide: {
          input: "py-3 text-base",
          padding: {
            left: leftIcon ? "pl-12" : "pl-4",
            right: rightIcon ? "pr-12" : "pr-4",
            both: "px-12"
          }
        }
      },
      icon: {
        base: "absolute top-1/2 transform -translate-y-1/2 text-gray-400 transition-colors",
        positions: {
          left: "left-3",
          right: "right-3"
        },
        sizes: {
          small: "w-4 h-4",
          medium: "w-5 h-5", 
          wide: "w-6 h-6"
        },
        clickable: "cursor-pointer hover:text-gray-600"
      },
      disabled: "bg-gray-100 border-gray-200 text-gray-500 cursor-not-allowed"
    };

    // 패딩 결정 로직
    const getPadding = () => {
      if (iconPosition === 'both' && leftIcon && rightIcon) {
        return styles.sizes[size].padding.both;
      }
      if (iconPosition === 'left' && leftIcon) {
        return styles.sizes[size].padding.left;
      }
      if (iconPosition === 'right' && rightIcon) {
        return styles.sizes[size].padding.right;
      }
      return iconPosition === 'left' ? styles.sizes[size].padding.left : styles.sizes[size].padding.right;
    };

    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            {label}
          </label>
        )}
        <div className={styles.container}>
          <input
            ref={ref}
            value={value}
            defaultValue={defaultValue}
            disabled={disabled}
            className={cn(
              styles.input,
              styles.states[currentState],
              styles.sizes[size].input,
              getPadding(),
              disabled && styles.disabled,
              className
            )}
            {...props}
          />
          
          {/* Left Icon */}
          {leftIcon && (iconPosition === 'left' || iconPosition === 'both') && (
            <div
              className={cn(
                styles.icon.base,
                styles.icon.positions.left,
                styles.icon.sizes[size],
                onIconClick && styles.icon.clickable
              )}
              onClick={() => onIconClick?.('left')}
            >
              {leftIcon}
            </div>
          )}
          
          {/* Right Icon */}
          {rightIcon && (iconPosition === 'right' || iconPosition === 'both') && (
            <div
              className={cn(
                styles.icon.base,
                styles.icon.positions.right,
                styles.icon.sizes[size],
                onIconClick && styles.icon.clickable
              )}
              onClick={() => onIconClick?.('right')}
            >
              {rightIcon}
            </div>
          )}
        </div>
      </div>
    );
  }
);

IconInput.displayName = 'IconInput';
export default IconInput;