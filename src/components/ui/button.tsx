import * as React from 'react';
import { Slot } from '@radix-ui/react-slot'; // Slot은 다른 태그로 대체할 수 있게 해주는 유틸
import { cva, type VariantProps } from 'class-variance-authority'; // variant 스타일 관리
import { cn } from '@/lib/utils'; // className 조건부 병합 유틸

// cva는 class들을 조건별로 조합해주는 유틸.
// variant, size 같은 옵션에 따라 스타일 자동 관리 가능.
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
      },
      inValid: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      inValid: false,
    },
  },
);

// Button 컴포넌트 정의
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  // variant, size를 자동 타입 추론
  asChild?: boolean; // Slot 컴포넌트를 쓸 건지 여부 (예: <a>, <Link>)
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // asChild가 true이면 Slot 사용 (예: <a>, <Link>로 감싸기), 아니면 기본 <button>
    const Comp = asChild ? Slot : 'button';
    return (
      // ref={ref} -> 외부에서 ref 접근 가능 (ex. focus)
      // className -> 조건별 스타일 조합
      // props -> 나머지 props 전달 (onClick 등)
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
