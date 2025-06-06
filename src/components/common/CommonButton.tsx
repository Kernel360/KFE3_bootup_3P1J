import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// CustomButton 컴포넌트에 사용할 props 타입 정의
interface CommonButtonProps extends React.ComponentProps<typeof Button> {
  // Button의 모든 props 상속
  label?: string; // children 대신 사용할 수 있는 label 문자열
  inValid?: boolean;
  color?: 'primary' | 'success' | 'danger' | 'info' | 'white';
}

export function CommonButton({
  label,
  children,
  inValid = false,
  color = 'primary',
  className,
  variant = 'default',
  ...props
}: CommonButtonProps) {
  return (
    <Button
      variant={variant}
      disabled={inValid}
      inValid={inValid}
      className={cn(
        buttonVariants({
          variant,
          ...props,
          inValid,
          ...(variant === 'outline' ? { outlineColor: color } : { bgColor: color }),
        }),
        className,
      )}
      {...props}
    >
      {children ?? label}
    </Button>
  );
}

// React DevTools에서 컴포넌트 이름을 CommonButton으로 표시하게 설정
CommonButton.displayName = 'CommonButton';
