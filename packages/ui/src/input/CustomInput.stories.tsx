// src/input/CustomInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import CustomInput from './CustomInput';
import BaseInput from './BaseInput';
import IconInput from './IconInput';
import { UserIcon, SearchIcon, EyeIcon, EyeOffIcon } from './icons';

// ===== BASE INPUT STORIES (ATOMS) =====
const baseInputMeta: Meta<typeof BaseInput> = {
  title: 'Atoms/BaseInput',
  component: BaseInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['empty', 'filled', 'error', 'active'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'wide'],
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

export { baseInputMeta as BaseInputMeta };

type BaseInputStory = StoryObj<typeof baseInputMeta>;

export const AtomBasic: BaseInputStory = {
  args: {
    placeholder: '기본 원자 입력 필드',
    label: '기본 입력 (Atom)',
  },
};

export const AtomStates: BaseInputStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <BaseInput state="empty" placeholder="빈 상태" label="빈 상태 (Atom)" />
      <BaseInput state="filled" defaultValue="채워진 상태" label="채워진 상태 (Atom)" />
      <BaseInput state="active" placeholder="활성 상태" label="활성 상태 (Atom)" />
      <BaseInput error placeholder="에러 상태" label="에러 상태 (Atom)" />
    </div>
  ),
};

export const AtomSizes: BaseInputStory = {
  render: () => (
    <div className="space-y-4">
      <BaseInput size="small" placeholder="작은 크기" label="작은 크기 (Atom)" />
      <BaseInput size="medium" placeholder="중간 크기" label="중간 크기 (Atom)" />
      <BaseInput size="wide" placeholder="넓은 크기" label="넓은 크기 (Atom)" />
    </div>
  ),
};

// ===== ICON INPUT STORIES (ORGANISMS) =====
const iconInputMeta: Meta<typeof IconInput> = {
  title: 'Organisms/IconInput',
  component: IconInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    iconPosition: {
      control: { type: 'select' },
      options: ['left', 'right', 'both'],
    },
    state: {
      control: { type: 'select' },
      options: ['empty', 'filled', 'error', 'active'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'wide'],
    },
  },
};

export { iconInputMeta as IconInputMeta };

type IconInputStory = StoryObj<typeof iconInputMeta>;

// 아이콘 위치별 스토리
export const LeftIconOnly: IconInputStory = {
  args: {
    iconPosition: 'left',
    leftIcon: <UserIcon />,
    placeholder: '왼쪽 아이콘만',
    label: '왼쪽 아이콘 (Organism)',
  },
};

export const RightIconOnly: IconInputStory = {
  args: {
    iconPosition: 'right',
    rightIcon: <SearchIcon />,
    placeholder: '오른쪽 아이콘만',
    label: '오른쪽 아이콘 (Organism)',
  },
};

export const BothIcons: IconInputStory = {
  args: {
    iconPosition: 'both',
    leftIcon: <UserIcon />,
    rightIcon: <EyeIcon />,
    placeholder: '양쪽 아이콘',
    label: '양쪽 아이콘 (Organism)',
  },
};

// 모든 아이콘 위치 비교
export const AllIconPositions: IconInputStory = {
  render: () => (
    <div className="space-y-4 w-96">
      <IconInput 
        iconPosition="left" 
        leftIcon={<UserIcon />} 
        placeholder="왼쪽 아이콘" 
        label="왼쪽 아이콘" 
      />
      <IconInput 
        iconPosition="right" 
        rightIcon={<SearchIcon />} 
        placeholder="오른쪽 아이콘" 
        label="오른쪽 아이콘" 
      />
      <IconInput 
        iconPosition="both" 
        leftIcon={<UserIcon />} 
        rightIcon={<EyeIcon />} 
        placeholder="양쪽 아이콘" 
        label="양쪽 아이콘" 
      />
    </div>
  ),
};

// ===== CUSTOM INPUT STORIES (COMPOSITE) =====
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
      options: ['small', 'medium', 'wide'],
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
      <CustomInput size="small" placeholder="작은 크기" label="작은 크기" />
      <CustomInput size="medium" placeholder="중간 크기" label="중간 크기" />
      <CustomInput size="wide" placeholder="넓은 크기" label="넓은 크기" />
    </div>
  ),
};

// 실제 사용 시나리오
export const RealWorldExamples: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <div>
        <h3 className="text-lg font-semibold mb-4">로그인 폼</h3>
        <div className="space-y-3">
          <CustomInput variant="user" placeholder="사용자명" label="아이디" />
          <CustomInput variant="password" placeholder="비밀번호" label="비밀번호" />
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">검색 및 필터</h3>
        <div className="space-y-3">
          <CustomInput variant="search" placeholder="상품명, 브랜드 검색" label="검색" />
          <CustomInput variant="basic" placeholder="최소 가격" label="가격 필터" size="small" />
        </div>
      </div>
    </div>
  ),
};

// 아토믹 디자인 설명 스토리
export const AtomicDesignGuide: Story = {
  render: () => (
    <div className="space-y-8 p-6 bg-gray-50 rounded-lg max-w-4xl">
      <h2 className="text-2xl font-bold">아토믹 디자인 기반 Input 컴포넌트</h2>

      {/* Atoms */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-blue-600">🔸 Atoms (원자)</h3>
        <p className="text-sm text-gray-600 mb-4">가장 기본적인 입력 기능만 제공하는 컴포넌트</p>
        <div className="space-y-3">
          <BaseInput placeholder="순수한 기본 입력 필드" label="BaseInput (원자)" />
          <BaseInput size="small" placeholder="작은 크기" label="작은 원자" />
        </div>
      </div>

      {/* Organisms */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-green-600">🔸 Organisms (유기체)</h3>
        <p className="text-sm text-gray-600 mb-4">아이콘과 함께 더 복잡한 기능을 제공하는 컴포넌트</p>
        <div className="space-y-3">
          <IconInput leftIcon={<UserIcon />} placeholder="왼쪽 아이콘" label="왼쪽 아이콘 유기체" />
          <IconInput rightIcon={<SearchIcon />} placeholder="오른쪽 아이콘" label="오른쪽 아이콘 유기체" />
          <IconInput 
            iconPosition="both" 
            leftIcon={<UserIcon />} 
            rightIcon={<EyeIcon />} 
            placeholder="양쪽 아이콘" 
            label="양쪽 아이콘 유기체" 
          />
        </div>
      </div>

      {/* Composite */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-purple-600">🔸 Composite (조합체)</h3>
        <p className="text-sm text-gray-600 mb-4">다양한 variant를 통해 특정 용도에 최적화된 컴포넌트</p>
        <div className="space-y-3">
          <CustomInput variant="basic" placeholder="기본 variant" label="Basic Composite" />
          <CustomInput variant="user" placeholder="사용자 variant" label="User Composite" />
          <CustomInput variant="search" placeholder="검색 variant" label="Search Composite" />
          <CustomInput variant="password" placeholder="비밀번호 variant" label="Password Composite" />
        </div>
      </div>

      {/* Architecture Benefits */}
      <div className="bg-white p-4 rounded-lg border">
        <h4 className="font-semibold mb-2">🏗️ 아키텍처 장점</h4>
        <ul className="text-sm space-y-1">
          <li><strong>재사용성:</strong> BaseInput은 어떤 프로젝트에서든 재사용 가능</li>
          <li><strong>확장성:</strong> IconInput으로 아이콘 위치별로 유연하게 확장</li>
          <li><strong>조합성:</strong> CustomInput으로 특정 용도에 맞는 변형 제공</li>
          <li><strong>유지보수성:</strong> 각 컴포넌트가 단일 책임을 가져 수정이 용이</li>
        </ul>
      </div>
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
            {`// 컴포지트 컴포넌트 (권장)
import CustomInput from '@/input';

// 개별 컴포넌트 (세밀한 제어가 필요한 경우)
import { BaseInput, IconInput } from '@/input';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 기본 사용법 (Composite)</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomInput 
  variant="basic"
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
          <h3 className="text-lg font-semibold mb-2">4. 아토믹 컴포넌트 직접 사용</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`// 순수 입력 (Atom)
<BaseInput placeholder="기본 입력" />

// 아이콘 입력 (Organism)
<IconInput 
  leftIcon={<UserIcon />}
  placeholder="사용자명"
/>

// 양쪽 아이콘 (Organism)
<IconInput 
  iconPosition="both"
  leftIcon={<UserIcon />}
  rightIcon={<SearchIcon />}
  placeholder="양쪽 아이콘"
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">5. 상태 관리</h3>
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
                <code className="bg-gray-100 px-2 py-1 rounded">size</code>: 'small' | 'medium' | 'wide'
                (기본값: 'medium')
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