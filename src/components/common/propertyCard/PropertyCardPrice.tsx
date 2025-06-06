import { cn } from '@/lib/utils';

// 가격 컴포넌트 (vertical용)
export const PropertyCardPrice = ({
  title,
  price,
  classname,
}: {
  title: string;
  price: number;
  classname?: string;
}) => {
  return (
    <p className={cn('text-[#F03F94] mb-[10px] inline-block', classname)}>
      <span className="text-xs">{title}</span>{' '}
      <strong className="text-[15px]">{price.toLocaleString()}원</strong>
    </p>
  );
};
