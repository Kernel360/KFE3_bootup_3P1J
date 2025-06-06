import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';

const meta: Meta<typeof CustomInput> = {
  title: 'Components/CustomInput',
  component: CustomInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['basic', 'user', 'search', 'password'],
    },
    state: {
      control: { type: 'select' },
      options: ['empty', 'filled', 'error', 'active'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'wide'],
    },
    error: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    variant: 'basic',
    placeholder: '기본 입력 필드',
    label: '기본 입력',
  },
};

// 모든 variant
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <CustomInput variant="basic" placeholder="기본 입력" label="기본" />
      <CustomInput variant="user" placeholder="사용자명" label="사용자" />
      <CustomInput variant="search" placeholder="검색" label="검색" />
      <CustomInput variant="password" placeholder="비밀번호" label="비밀번호" />
    </div>
  ),
};

// 모든 상태
export const AllStates: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <CustomInput state="empty" placeholder="빈 상태" label="빈 상태" />
      <CustomInput state="filled" defaultValue="채워진 상태" label="채워진 상태" />
      <CustomInput state="active" placeholder="활성 상태" label="활성 상태" />
      <CustomInput error placeholder="에러 상태" label="에러 상태" />
    </div>
  ),
};

// 크기 비교
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <CustomInput placeholder="기본 크기" label="기본 크기" />
      <CustomInput size="small" placeholder="작은 크기" label="작은 크기" />
      <CustomInput size="wide" placeholder="넓은 크기" label="넓은 크기" />
    </div>
  ),
};

// 사용법 가이드 스토리
export const HowToUse: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg max-w-2xl">
      <h2 className="text-xl font-bold">CustomInput 사용법</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Import</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`import CustomInput from '@/components/ui/input';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 기본 사용법</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomInput 
  placeholder="입력하세요" 
  label="라벨 텍스트" 
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. Variant별 사용법</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`// 기본 입력
<CustomInput variant="basic" placeholder="기본 입력" />

// 사용자 아이콘이 있는 입력
<CustomInput variant="user" placeholder="사용자명" />

// 검색 아이콘이 있는 입력
<CustomInput variant="search" placeholder="검색어" />

// 비밀번호 입력 (토글 가능)
<CustomInput variant="password" placeholder="비밀번호" />`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. 상태 관리</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`const [value, setValue] = useState('');

<CustomInput 
  placeholder="입력하세요"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  
  // 에러 상태
  error={value.length < 3}
  
  // 강제 상태 설정
  state="active"
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">5. 크기와 기타 옵션</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomInput 
  size="small" 
  placeholder="작은 입력" 
  label="작은 크기"
/>

<CustomInput 
  size="wide" 
  placeholder="넓은 입력" 
  label="넓은 크기"
  disabled
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">6. Props</h3>
          <div className="bg-white p-4 rounded border">
            <ul className="space-y-2 text-sm">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">variant</code>: 'basic' | 'user' |
                'search' | 'password' (기본값: 'basic')
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">state</code>: 'empty' | 'filled' |
                'error' | 'active' (자동 감지 또는 강제 설정)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">size</code>: 'small' | 'wide'
                (기본값: 전체 너비)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">error</code>: boolean (에러 상태
                활성화)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">label</code>: string (라벨 텍스트)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">placeholder</code>: string
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">disabled</code>: boolean
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
