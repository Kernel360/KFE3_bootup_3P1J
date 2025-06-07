import { cn } from '@/lib/utils';
import { TimerBadge } from './TimerBadge';

// 이미지 컴포넌트
export const PropertyCardImage = ({
  direction,
  size,
  imageUrl,
  title,
  timeLeft,
}: {
  direction: 'vertical' | 'horizontal';
  size: 'medium' | 'large';
  imageUrl: string;
  title: string;
  timeLeft: string;
}) => {
  if (direction === 'vertical') {
    return (
      <div className={cn('relative mb-[7px]', size === 'medium' ? 'h-[120px]' : 'h-[215px]')}>
        <div className="size-full overflow-hidden rounded-[10px]">
          <img src={imageUrl} alt={title} className="size-full object-cover" />
        </div>
        <TimerBadge position="absolute" timeLeft={timeLeft} />
      </div>
    );
  }

  return (
    <div className="size-[100px] mr-2 relative shrink-0">
      <div className="size-full overflow-hidden rounded-[10px]">
        <img src={imageUrl} alt={title} className="size-full object-cover" />
      </div>
      {/* Horizontal에서는 TimerBadge를 이미지에서 제거 */}
    </div>
  );
};
