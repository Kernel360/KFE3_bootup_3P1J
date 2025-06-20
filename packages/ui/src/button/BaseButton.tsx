'use client';
import React, { forwardRef } from 'react';
import { cn } from '../lib/utils';
import { BaseButtonProps } from '../types/button.types';

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
  ({
    variant = 'default',
    size = 'default',
    label,
    children,
    inValid = false,
    loading = false,
    className,
    disabled,
    ...props
  }, ref) => {
    const isDisabled = disabled || inValid || loading;

    // 스타일 정의 (DIP 원칙)
    const baseStyles = {
      base: "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      variants: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      sizes: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      },
      states: {
        invalid: "border-red-500 bg-red-50 text-red-900 hover:bg-red-100",
        loading: "cursor-wait"
      }
    };

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={cn(
          baseStyles.base,
          baseStyles.variants[variant],
          baseStyles.sizes[size],
          inValid && baseStyles.states.invalid,
          loading && baseStyles.states.loading,
          className
        )}
        {...props}
      >
        {loading && (
          <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              className="opacity-25"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children ?? label}
      </button>
    );
  }
);

BaseButton.displayName = 'BaseButton';
export default BaseButton;