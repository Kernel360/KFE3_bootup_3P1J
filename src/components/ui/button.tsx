import * as React from 'react';
import { Slot } from '@radix-ui/react-slot'; // Slot은 다른 태그로 대체할 수 있게 해주는 유틸
import { cva, type VariantProps } from 'class-variance-authority'; // variant 스타일 관리
import { cn } from '@/lib/utils'; // className 조건부 병합 유틸

// cva는 class들을 조건별로 조합해주는 유틸.
// variant, size 같은 옵션에 따라 스타일 자동 관리 가능.
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'text-white font-semibold text-[white] leading-[22px] text-center rounded-[99px]',
        outline: 'font-semibold leading-[22px] rounded-[99px] justify-center items-center gap-2',
        // 예제들
        //  destructive:
        //  'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        // secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        // ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        // link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        // small
        default: 'w-[82px] h-[46px] px-[24px] py-[12px] gap-2',
        me: 'w-[220px] h-[60px] px-[16px] py-[19px] gap-2',
        lg: 'w-[327px] h-[60px] px-[16px] py-[19px] gap-2',
      },
      bgColor: {
        default:
          'bg-[#EE8E1F] active:bg-[rgba(238,142,31,0.1)] active:border active:border-[#EE8E1F] active:text-[#EE8E1F]',
        success:
          'bg-[#64B799] active:bg-[rgba(100,183,153,0.1)] active:border active:border-[#64B799] active:text-[#64B799]',
        danger:
          'bg-[#F03F94] active:bg-[rgba(240,63,148,0.1)] active:border active:border-[#F03F94] active:text-[#F03F94]',
        info: 'bg-[#7251F8] active:bg-[rgba(114,81,248,0.1)] active:border active:border-[#7251F8] active:text-[#7251F8]',
      },
      outlineColor: {
        default: 'border border-[#EE8E1F] text-[#EE8E1F] active:bg-[rgba(238,142,31,0.1)]',
        success: 'border border-[#64B799] text-[#64B799] active:bg-[rgba(100,183,153,0.1)]',
        danger: 'border border-[#F03F94] text-[#F03F94] active:bg-[rgba(240,63,148,0.1)]',
        info: 'border border-[#7251F8] text-[#7251F8] active:bg-[rgba(114,81,248,0.1)]',
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
      // bgColor: 'default',
      // outlineColor: 'default',
    },
  },
);

// props 정의
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// 컴포넌트 정의
function Button({
  className,
  variant,
  size,
  bgColor,
  outlineColor,
  inValid,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  // variant에 따라 적용할 props 다르게 분기
  const styleProps: VariantProps<typeof buttonVariants> = {
    variant,
    size,
    inValid,
    ...(variant === 'outline'
      ? { outlineColor: outlineColor ?? 'default' }
      : { bgColor: bgColor ?? 'default' }),
  };

  return <Comp className={cn(buttonVariants(styleProps), className)} {...props} />;
}

Button.displayName = 'Button';

export { Button, buttonVariants };
