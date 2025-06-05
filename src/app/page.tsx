import { CustomButton } from '@/components/common/CustomButton';

export default function Home() {

  const handletest = () => {
    console.log("작동중")
  }

  return (
    <div>
      메인홈입니다.
      
      {/* 예시 */}
      <CustomButton label='경매 등록' size='lg' onClick={handletest}/>
    </div>
  );
}
