import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { PropertyCardImage } from './PropertyCardImage';
import { PropertyCardTitle } from './PropertyCardTitle';
import { PropertyCardPrice } from './PropertyCardPrice';
import { PropertyCardInfo } from './PropertyCardInfo';
import { TimerBadge } from './TimerBadge';

interface PropertyCardProps {
  title: string;
  currentPrice: number;
  date: string;
  location: string;
  bidderCount: number;
  imageUrl: string;
  timeLeft: string;
  direction?: 'vertical' | 'horizontal';
  size?: 'medium' | 'large';
  myBid?: number;
}

{
  /* <PropertyCard
  size="medium"
  direction="vertical"
  title="명품한우 강남점 2인석"
  currentPrice={50000}
  date="2025-06-27"
  location="강남구 • 2인석 • 한식"
  imageUrl="--"
  timeLeft="00:00:00"
  bidderCount={10}
/>; */
}
export function PropertyCard({
  title,
  currentPrice,
  date,
  location,
  bidderCount,
  imageUrl,
  timeLeft,
  direction = 'vertical',
  size = 'medium',
  myBid,
}: PropertyCardProps) {
  return (
    <Card direction={direction} size={size}>
      {/* 이미지 섹션 */}
      <PropertyCardImage
        direction={direction}
        size={size}
        imageUrl={imageUrl}
        title={title}
        timeLeft={timeLeft}
      />

      {direction === 'vertical' ? (
        <>
          <CardHeader>
            <PropertyCardTitle title={title} date={date} showDateInHeader={size === 'large'} />
          </CardHeader>

          <CardContent>
            <PropertyCardPrice title="현재가" price={currentPrice} />
            <PropertyCardInfo
              date={date}
              location={location}
              bidderCount={bidderCount}
              showDate={size === 'medium'}
            />
          </CardContent>
        </>
      ) : (
        <div className="w-full">
          <CardHeader>
            <div className="flex justify-between">
              <PropertyCardTitle title={title} date={date} showDateInHeader={false} />
              <TimerBadge position="inline" timeLeft={timeLeft} />
            </div>
          </CardHeader>
          <CardContent>
            <PropertyCardPrice title="현재가" price={currentPrice} classname="mr-4" />
            <PropertyCardPrice title="내 입찰가" price={500000000000} />
            <PropertyCardInfo
              date={date}
              location={location}
              bidderCount={bidderCount}
              showDate={true}
            />
          </CardContent>
        </div>
      )}
    </Card>
  );
}
