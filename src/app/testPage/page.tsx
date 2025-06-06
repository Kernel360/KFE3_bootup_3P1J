import { CustomButton } from '@/components/common/CustomButton';

export default function page() {
  const handletest = () => {
    console.log('작동중');
  };

  return (
    <div>
      테스트페이지입니다.
      <br/>
      {/* 예시 */}
      <h1>Solid</h1>
      <p>
        <CustomButton label="Rest" />
      </p>
      <p>
        <CustomButton label="Rest" bgColor="success" />
      </p>
      <p>
        <CustomButton label="Rest" bgColor="danger" />
      </p>
      <p>
        <CustomButton label="Rest" bgColor="info" />
      </p>
      <p>
        <CustomButton label="Get started" size="me" />
      </p>
      <p>
        <CustomButton label="Get started" size="me" bgColor="success" />
      </p>
      <p>
        <CustomButton label="Get started" size="me" bgColor="danger" />
      </p>
      <p>
        <CustomButton label="Get started" size="me" bgColor="info" />
      </p>
      <p>
        <CustomButton label="Get started" size="lg" />
      </p>
      <p>
        <CustomButton label="Get started" size="lg" bgColor="success" />
      </p>
      <p>
        <CustomButton label="Get started" size="lg" bgColor="danger" />
      </p>
      <p>
        <CustomButton label="Get started" size="lg" bgColor="info" />
      </p>
      <h1>Outline</h1>
      <p>
        <CustomButton label="Rest" variant="outline" />
      </p>
      <p>
        <CustomButton label="Rest" variant="outline" outlineColor="success" />
      </p>
      <p>
        <CustomButton label="Rest"variant="outline" outlineColor="danger" />
      </p>
      <p>
        <CustomButton label="Rest" variant="outline" outlineColor="info" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="me" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="me" outlineColor="success" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="me" outlineColor="danger" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="me" outlineColor="info" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="lg" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="lg" outlineColor="success" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="lg" outlineColor="danger" />
      </p>
      <p>
        <CustomButton label="Get started" variant="outline" size="lg" outlineColor="info" />
      </p>
    </div>
  );
}
