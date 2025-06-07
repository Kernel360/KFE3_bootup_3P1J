import { CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export const PropertyCardTitle = ({
  title,
  date,
  showDateInHeader,
}: {
  title: string;
  date: string;
  showDateInHeader: boolean;
}) => {
  if (showDateInHeader) {
    return (
      <div className="flex justify-between items-center">
        <CardTitle className="w-[240px] text-base truncate">{title}</CardTitle>
        <div className="flex items-center">
          <Calendar className="size-[14px] text-[#7251F8] mr-[3px]" />
          <span className="text-neutral-70 text-xs">{date}</span>
        </div>
      </div>
    );
  }

  return <CardTitle className="w-[240px] text-base truncate">{title}</CardTitle>;
};
