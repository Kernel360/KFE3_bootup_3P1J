'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';

type SelectSize = 'sm' | 'md' | 'lg';

interface CustomSelectProps {
  placeholder?: string;
  items: { label: string; value: string }[];
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  size?: SelectSize;
}

export const CustomSelect = ({
  placeholder = '선택',
  items,
  onValueChange,
  defaultValue,
  size = 'md',
}: CustomSelectProps) => {
  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      {/* 트리거 버튼: 사이즈별 스타일 적용 */}
      <SelectTrigger size={size}>
        {/* 선택 전에는 placeholder, 선택 후에는 값 표시 */}
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>

      {/* 드롭다운 항목들 */}
      <SelectContent>
        {items.map((item) => (
          <SelectItem key={item.value} value={item.value}>
            {item.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
