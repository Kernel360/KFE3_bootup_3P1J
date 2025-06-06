// 타이머 뱃지
export const TimerBadge = ({
  position,
  timeLeft,
}: {
  position: 'absolute' | 'inline';
  timeLeft: string;
}) => {
  if (position === 'inline') {
    // Horizontal: 제목 옆에 inline으로
    return (
      <span className="w-[62px] h-[22px] flex items-center justify-center bg-[#FFFFFF]/70 text-[#656565] text-xs rounded-[10px] px-2 py-1 shrink-0">
        {timeLeft}
      </span>
    );
  }

  // Vertical: 이미지 위에 absolute로
  return (
    <span className="absolute top-2 right-2 w-[62px] h-[22px] flex items-center justify-center bg-[#FFFFFF]/70 text-[#656565] text-sm rounded-[10px] px-2 py-1">
      {timeLeft}
    </span>
  );
};
