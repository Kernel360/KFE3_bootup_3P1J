'use client';
import React, { forwardRef } from 'react';
import { Tabs, TabsList, TabsTrigger } from './tabs';
import { cn } from '../lib/utils';
import { BaseTabProps } from '../types/tab.types';

const BaseTab = forwardRef<HTMLDivElement, BaseTabProps>(
  ({
    items,
    defaultValue,
    value,
    onValueChange,
    className,
    disabled = false,
    ...props
  }, ref) => {
    const currentValue = value || defaultValue || items[0]?.value;

    return (
      <div ref={ref} {...props}>
        <Tabs
          value={currentValue}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          className={className}
        >
          <TabsList className="grid w-full grid-cols-1">
            {items.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                disabled={disabled || item.disabled}
                className="transition-all"
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

BaseTab.displayName = 'BaseTab';
export default BaseTab;