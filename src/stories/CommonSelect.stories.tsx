import { CommonSelect } from '@/components/common/CommonSelect';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof CommonSelect> = {
  title: 'Components/CommonSelect',
  component: CommonSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: '셀렉트 크기',
    },
    placeholder: {
      control: 'text',
      description: '플레이스홀더 텍스트',
    },
    defaultValue: {
      control: 'text',
      description: '기본 선택값',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    size: 'md',
    placeholder: '선택하세요',
    items: [
      { label: 'banana', value: 'banana' },
      { label: 'apple', value: 'apple' },
      { label: 'orange', value: 'orange' },
      { label: 'lemon', value: 'lemon' },
    ],
  },
};

// 크기별 비교
export const AllSizes: Story = {
  render: () => {
    const fruitItems = [
      { label: 'banana', value: 'banana' },
      { label: 'apple', value: 'apple' },
      { label: 'orange', value: 'orange' },
      { label: 'lemon', value: 'lemon' },
    ];

    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium mb-2">Small (sm)</h3>
          <CommonSelect size="sm" items={fruitItems} placeholder="과일 선택" />
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Medium (md)</h3>
          <CommonSelect size="md" items={fruitItems} placeholder="과일 선택" />
        </div>
        <div>
          <h3 className="text-sm font-medium mb-2">Large (lg)</h3>
          <CommonSelect size="lg" items={fruitItems} placeholder="과일 선택" />
        </div>
      </div>
    );
  },
};

// 사용법 가이드 스토리
export const HowToUse: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg max-w-2xl">
      <h2 className="text-xl font-bold">CommonSelect 사용법</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Import</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`import { CommonSelect } from '@/components/common/CommonSelect';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 기본 사용법</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CommonSelect 
  items={[
    { label: '옵션 1', value: 'option1' },
    { label: '옵션 2', value: 'option2' },
  ]}
  onValueChange={(value) => console.log(value)}
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. 상태 관리와 함께 사용</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`const [selected, setSelected] = useState('');

<CommonSelect 
  size="lg"
  defaultValue=""
  placeholder="선택하세요"
  items={fruitItems}
  onValueChange={(value) => setSelected(value)}
/>

<div>선택된 값: {selected}</div>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Props</h3>
          <div className="bg-white p-4 rounded border">
            <ul className="space-y-2 text-sm">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">size</code>: 'sm' | 'md' | 'lg'
                (기본값: 'md')
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">placeholder</code>: string (기본값:
                '선택')
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">items</code>:{' '}
                {`{label: string, value: string}[]`} (필수)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">onValueChange</code>: (value:
                string) =&gt; void
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">defaultValue</code>: string
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
