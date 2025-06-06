import { Calendar, MapPin, UserRound } from 'lucide-react';

// 정보 컴포넌트 (vertical용)
export const PropertyCardInfo = ({
  date,
  location,
  bidderCount,
  showDate,
}: {
  date: string;
  location: string;
  bidderCount: number;
  showDate: boolean;
}) => {
  return (
    <div className="space-y-[3px]">
      {showDate && (
        <div className="flex items-center">
          <Calendar className="size-[14px] text-[#7251F8] mr-[3px]" />
          <span className="text-neutral-70 text-xs">{date}</span>
        </div>
      )}
      <div className="flex items-center">
        <MapPin className="size-[14px] text-pink-500 mr-[3px]" />
        <span className="text-neutral-70 text-xs">{location}</span>
      </div>
      <div className="flex items-center">
        <UserRound className="size-[14px] text-[#64B799] mr-[3px]" />
        <span className="text-neutral-70 text-xs">입찰자수 {bidderCount}명</span>
      </div>
    </div>
  );
};
