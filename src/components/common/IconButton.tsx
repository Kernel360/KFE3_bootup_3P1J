import React from 'react';
import { cn } from '@/lib/utils';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import { IoMdArrowBack } from 'react-icons/io';
import { HiBell } from 'react-icons/hi';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: 'bookmark' | 'back' | 'alarm';
  variant: 'solid' | 'outlined';
  color: 'neutral' | 'primary' | 'white';
  size: 'sm' | 'md';
  state?: boolean;
  bgColor?: 'white' | 'gray';
}

function resolveIconComponent({ icon, state = false }: IconButtonProps): React.ReactNode {
  if (icon === 'bookmark') {
    return state ? <IoBookmark /> : <IoBookmarkOutline />;
  }
  if (icon === 'back') {
    return <IoMdArrowBack />;
  }
  if (icon === 'alarm') {
    return <HiBell />;
  }
  return null;
}

export function IconButton({
  icon,
  variant,
  color,
  size,
  state = false,
  bgColor,
  className,
  ...props
}: IconButtonProps) {
  const iconElement = resolveIconComponent({ icon, variant, color, size, state });

  const sizeStyle = size === 'sm' ? 'w-[32px] h-[32px]' : 'w-[44px] h-[44px]';
  const iconSize = size === 'sm' ? 'text-[18px]' : 'text-[24px]';

  const isSolid = variant === 'solid';
  const isOutlined = variant === 'outlined';
  const isWhiteOutlined = isOutlined && color === 'white';

  const baseBg = isSolid
    ? bgColor === 'white'
      ? 'bg-[#FFFFFF]'
      : 'bg-[#F4F4F7]'
    : isWhiteOutlined
    ? 'bg-transparent border border-[#FFFFFF]'
    : 'bg-transparent border border-[#EE8E1F]';

  const activeBg = isSolid
    ? 'active:bg-[rgba(102,102,102,0.2)] active:border active:border-[#666666]'
    : isWhiteOutlined
    ? 'active:border-[#EE8E1F] active:text-[#EE8E1F]'
    : 'active:bg-[rgba(238,142,31,0.2)] active:border active:border-[#EE8E1F]';

  const backgroundColor = cn(baseBg, activeBg);

  const iconColor = isOutlined
    ? color === 'white'
      ? 'text-[#FFFFFF] active:text-[#EE8E1F]'
      : 'text-[#EE8E1F]'
    : 'text-[#666666]';

  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        sizeStyle,
        backgroundColor,
        className
      )}
      {...props}
    >
      <span className={cn('flex items-center justify-center', iconSize, iconColor)}>
        {iconElement}
      </span>
    </button>
  );
}

IconButton.displayName = 'IconButton';
