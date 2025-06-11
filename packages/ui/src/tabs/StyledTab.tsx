'use client';

import React, { forwardRef } from 'react';
import { Tabs, TabsList, TabsTrigger } from './tabs';
import { cn } from '../lib/utils';
import { BaseTabProps } from '../types/tab.types';

interface StyledTabProps extends BaseTabProps {
  variant?: 'rounded' | 'underline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
}

const StyledTab = forwardRef<HTMLDivElement, StyledTabProps>(
  ({
    items,
    defaultValue,
    value,
    onValueChange,
    className,
    variant = 'rounded',
    size = 'md',
    disabled = false,
    ...props
  }, ref) => {
    const currentValue = value || defaultValue || items[0]?.value;

    // variant별 스타일 정의 (OCP 원칙)
    const styles = {
      container: {
        rounded: "w-[440px] h-[52px] bg-gray-100 p-1 rounded-full",
        underline: "w-full bg-transparent border-b",
        pills: "w-full bg-gray-50 p-1 rounded-lg"
      },
      trigger: {
        rounded: "flex-1 h-[44px] rounded-full text-gray-600 font-medium transition-all data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:shadow-sm",
        underline: "flex-1 pb-2 border-b-2 border-transparent data-[state=active]:border-orange-400 data-[state=active]:text-orange-600",
        pills: "flex-1 rounded-md data-[state=active]:bg-white data-[state=active]:shadow-sm"
      },
      sizes: {
        sm: { container: "h-8 text-xs", trigger: "h-6 px-2" },
        md: { container: "h-10 text-sm", trigger: "h-8 px-3" },
        lg: { container: "h-12 text-base", trigger: "h-10 px-4" }
      }
    };

    return (
      <div ref={ref} {...props}>
        <Tabs
          value={currentValue}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          className={className}
        >
          <TabsList className={cn(
            styles.container[variant],
            variant !== 'rounded' && `grid grid-cols-${items.length}`
          )}>
            {items.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                disabled={disabled || item.disabled}
                className={cn(
                  styles.trigger[variant],
                  styles.sizes[size].trigger
                )}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    );
  }
);

StyledTab.displayName = 'StyledTab';
export default StyledTab;