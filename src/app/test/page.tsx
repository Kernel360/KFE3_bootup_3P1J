'use client';

import { CustomSelect } from '@/components/common/CustomSelect';
import { useState } from 'react';

export default function Page() {
  const [selectedPrefix, setSelectedPrefix] = useState('');
  const [selectedFruitMd, setSelectedFruitMd] = useState('');
  const [selectedFruitLg, setSelectedFruitLg] = useState('');

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
    </div>
  );
}
