'use client';

import { CustomButton } from '@/components/common/CustomButton';
import { CustomSelect } from '@/components/common/CustomSelect';
import { IconButton } from '@/components/common/IconButton';
import { useState } from 'react';

export default function Page() {
  const [selectedPrefix, setSelectedPrefix] = useState('');
  const [selectedFruitMd, setSelectedFruitMd] = useState('');
  const [selectedFruitLg, setSelectedFruitLg] = useState('');

  const [isBookmarked, setIsBookmarked] = useState(false);

  const handletest = () => {
    console.log('작동중');
  };

  return (
    <div className="space-y-4 p-4">
      <h2 className="text-lg font-semibold">전화번호 앞자리 선택</h2>

      <CustomSelect
        size="sm"
        defaultValue=""
        onValueChange={(val) => setSelectedPrefix(val)}
        items={[
          { label: '010', value: '010' },
          { label: '011', value: '011' },
          { label: '016', value: '016' },
          { label: '017', value: '017' },
        ]}
      />
      <div className="text-sm text-gray-500">
        현재 선택된 번호: <span className="font-medium">{selectedPrefix}</span>
      </div>

      <h2 className="text-lg font-semibold">과일 선택 (중간 사이즈)</h2>
      <CustomSelect
        size="md"
        defaultValue=""
        onValueChange={(val) => setSelectedFruitMd(val)}
        items={[
          { label: 'banana', value: 'banana' },
          { label: 'apple', value: 'apple' },
          { label: 'orange', value: 'orange' },
          { label: 'lemon', value: 'lemon' },
        ]}
      />
      <div className="text-sm text-gray-500">
        현재 선택된 과일 (md): <span className="font-medium">{selectedFruitMd}</span>
      </div>

      <h2 className="text-lg font-semibold">과일 선택 (큰 사이즈)</h2>
      <CustomSelect
        size="lg"
        defaultValue=""
        onValueChange={(val) => setSelectedFruitLg(val)}
        items={[
          { label: 'banana', value: 'banana' },
          { label: 'apple', value: 'apple' },
          { label: 'orange', value: 'orange' },
          { label: 'lemon', value: 'lemon' },
        ]}
      />
      <div className="text-sm text-gray-500">
        현재 선택된 과일 (lg): <span className="font-medium">{selectedFruitLg}</span>
      </div>

      <div>
        테스트페이지입니다.
        <br />
        {/* 예시 */}
        <h1>Solid</h1>
        <p>
          <CustomButton label="Rest" inValid={true} onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Rest" color="success" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Rest" color="danger" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Rest" color="info" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Rest" color="white" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="me" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="me" color="success" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="me" color="danger" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="me" color="info" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="me" color="white" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="lg" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="lg" color="success" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="lg" color="danger" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="lg" color="info" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" size="lg" color="white" onClick={handletest} />
        </p>
        <h1>Outline</h1>
        <p>
          <CustomButton label="Rest" variant="outline" onClick={handletest} />
        </p>
        <p>
          <CustomButton
            label="Rest"
            variant="outline"
            color="success"
            onClick={handletest}
          />
        </p>
        <p>
          <CustomButton label="Rest" variant="outline" color="danger" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Rest" variant="outline" color="info" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Rest" variant="outline" color="white" onClick={handletest} />
        </p>
        <p>
          <CustomButton label="Get started" variant="outline" size="me" onClick={handletest} />
        </p>
        <p>
          <CustomButton
            label="Get started"
            variant="outline"
            size="me"
            color="success"
            onClick={handletest}
          />
        </p>
        <p>
          <CustomButton
            label="Get started"
            variant="outline"
            size="me"
            color="danger"
            onClick={handletest}
          />
        </p>
        <p>
          <CustomButton
            label="Get started"
            variant="outline"
            size="me"
            color="info"
            onClick={handletest}
          />
        </p>
        <p>
          <CustomButton label="Get started" variant="outline" size="lg" onClick={handletest} />
        </p>
        <p>
          <CustomButton
            label="Get started"
            variant="outline"
            size="lg"
            color="success"
            onClick={handletest}
          />
        </p>
        <p>
          <CustomButton
            label="Get started"
            variant="outline"
            size="lg"
            color="danger"
            onClick={handletest}
          />
        </p>
        <p>
          <CustomButton
            label="Get started"
            variant="outline"
            size="lg"
            outlineColor="info"
            onClick={handletest}
          />
        </p>
        <div className="space-x-4 p-4">
          {/* Solid - Alarm (gray bg) */}
          <IconButton icon="alarm" variant="solid" color="neutral" size="md" bgColor="gray" />
          <IconButton icon="alarm" variant="solid" color="neutral" size="sm" bgColor="gray" />

          {/* Solid - Back (white bg) */}
          <IconButton icon="back" variant="solid" color="neutral" size="md" bgColor="white" />
          <IconButton icon="back" variant="solid" color="neutral" size="sm" bgColor="white" />

          {/* Solid - Bookmark (gray bg, 저장 상태) */}
          <IconButton
            icon="bookmark"
            variant="solid"
            color="neutral"
            size="md"
            bgColor="gray"
            state={true}
          />

          {/* Solid - Bookmark (white bg, 저장 안됨) */}
          <IconButton
            icon="bookmark"
            variant="solid"
            color="neutral"
            size="sm"
            bgColor="white"
            state={false}
          />
          {/* Outlined - Bookmark */}
          <IconButton
            icon="bookmark"
            variant="outlined"
            color="primary"
            size="md"
            state={isBookmarked}
            onClick={() => setIsBookmarked((prev) => !prev)}
          />

          <IconButton icon="bookmark" variant="outlined" color="white" size="md" />
          <IconButton icon="bookmark" variant="outlined" color="white" size="sm" />
        </div>
      </div>
    </div>
  );
}
