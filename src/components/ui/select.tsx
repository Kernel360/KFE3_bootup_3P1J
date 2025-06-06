'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

// 기본 Select 컴포넌트를 Radix에서 가져와 export
const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;

// 선택된 값이 없을 때만 placeholder("선택")를 보여주도록 설정
const SelectValue = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Value>) => (
  <SelectPrimitive.Value
    placeholder="선택"
    className={cn('text-[#8F8F8F]', className)}
    {...props}
  />
);

// 사용자에게 보여지는 트리거 버튼 컴포넌트
const SelectTrigger = ({
  className,
  size = 'md', // 기본 사이즈는 'md'
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'md' | 'lg';
}) => {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        // 공통 스타일 지정 + 드롭다운 열렸을 때만 주황색 테두리 적용
        'flex items-center justify-between rounded-full border outline-none transition text-sm bg-white text-[#8F8F8F] px-4 data-[state=open]:ring-0 data-[state=open]:border-[1px] data-[state=open]:border-[#EE8E1F]',
        {
          // 사이즈별 스타일 지정
          'h-[54px] min-w-[100px]': size === 'sm',
          'h-[54px] min-w-[210px]': size === 'md',
          'h-[54px] min-w-[440px]': size === 'lg',
        },
        className,
      )}
      {...props} // 기타 props 전달
    >
      {/* 선택된 값을 보여주는 영역 */}
      <SelectPrimitive.Value placeholder="선택" />
      {/* 오른쪽 화살표 아이콘 */}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="w-4 h-4 text-[#101010]" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

// 드롭다운 리스트 영역 (포털로 분리되어 렌더링됨)
const SelectContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        // Trigger와 너비 일치시키기 위한 스타일 추가
        'z-50 rounded-[30px] border bg-white shadow-md overflow-hidden text-sm min-w-[var(--radix-select-trigger-width)] w-[var(--radix-select-trigger-width)]',
        className,
      )}
      position="popper" // Trigger 아래에 위치하도록 설정
      sideOffset={4} // 약간의 간격 띄움
      {...props}
    />
  </SelectPrimitive.Portal>
);

// 하나의 항목 (옵션)
const SelectItem = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>) => (
  <SelectPrimitive.Item
    className={cn(
      // 선택되었거나 포커스된 경우 회색 배경 처리
      'relative flex cursor-default select-none items-center rounded px-3 py-2 text-gray-800 focus:bg-gray-100 data-[state=checked]:bg-gray-100',
      className,
    )}
    {...props}
  >
    {/* 선택 표시용 체크 아이콘 영역 (오른쪽 끝) */}
    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <CheckIcon className="w-4 h-4" />
      </SelectPrimitive.ItemIndicator>
    </span>
    {/* 항목 텍스트 */}
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
);

// 그룹 라벨 텍스트
const SelectLabel = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>) => (
  <SelectPrimitive.Label
    className={cn('px-2 py-1.5 text-xs text-muted-foreground', className)}
    {...props}
  />
);

// 항목 사이 구분선
const SelectSeparator = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>) => (
  <SelectPrimitive.Separator className={cn('-mx-1 my-1 h-px bg-border', className)} {...props} />
);

// 드롭다운 위쪽 스크롤 버튼 (항목이 많을 때 사용)
const SelectScrollUpButton = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>) => (
  <SelectPrimitive.ScrollUpButton
    className={cn('flex items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUpIcon className="w-4 h-4" />
  </SelectPrimitive.ScrollUpButton>
);

// 드롭다운 아래쪽 스크롤 버튼 (항목이 많을 때 사용)
const SelectScrollDownButton = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>) => (
  <SelectPrimitive.ScrollDownButton
    className={cn('flex items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDownIcon className="w-4 h-4" />
  </SelectPrimitive.ScrollDownButton>
);

// 각 컴포넌트들을 export 하여 필요한 곳에서 조합해서 사용 가능하게 함
export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
