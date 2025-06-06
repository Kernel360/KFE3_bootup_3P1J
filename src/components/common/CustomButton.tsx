import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';

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
      className={buttonVariants({
        ...props,
        inValid,
        className, // 추가 스타일도 적용 가능
      })}
      disabled={inValid}
      {...props}
    >
      {/* children이 존재하면 children 렌더링, 없으면 label 사용 */}
      {children ?? label}
    </Button>
  );
}

// React DevTools에서 컴포넌트 이름을 CustomButton으로 표시하게 설정
CustomButton.displayName = 'CustomButton';
