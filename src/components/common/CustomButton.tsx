import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// CustomButton 컴포넌트에 사용할 props 타입 정의
interface CustomButtonProps extends React.ComponentProps<typeof Button> {
  // Button의 모든 props 상속
  label?: string; // children 대신 사용할 수 있는 label 문자열
  inValid?: boolean;
}

export function CustomButton({
  label,
  children,
  inValid = false,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button
      variant="default"
      disabled={inValid}
      inValid={inValid}
      className={cn(buttonVariants({ ...props, inValid }), className)}
      {...props}
    >
      {children ?? label}
    </Button>
  );
}

// React DevTools에서 컴포넌트 이름을 CustomButton으로 표시하게 설정
CustomButton.displayName = 'CustomButton';
