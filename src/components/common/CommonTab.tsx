'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface TabItem {
  value: string;
  label: string;
}

interface CommonTabProps {
  items: TabItem[];
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const CommonTab = ({
  items,
  defaultValue,
  onValueChange,
  className = '',
}: CommonTabProps) => {
  return (
    <Tabs
      defaultValue={defaultValue || items[0]?.value}
      onValueChange={onValueChange}
      className={className}
    >
      <TabsList className="w-[440px] h-[52px] bg-gray-100 p-1 rounded-full">
        {items.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value}
            className="flex-1 h-[44px] rounded-full text-gray-600 font-medium transition-all data-[state=active]:bg-orange-400 data-[state=active]:text-white data-[state=active]:shadow-sm"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
