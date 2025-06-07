import type { Meta, StoryObj } from '@storybook/react';
import { CommonButton } from '../components/common/CommonButton';

const meta: Meta<typeof CommonButton> = {
  title: 'Components/CommonButton',
  component: CommonButton,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'me', 'lg'],
    },
    bgColor: {
      control: { type: 'select' },
      options: ['default', 'success', 'danger', 'info'],
    },
    outlineColor: {
      control: { type: 'select' },
      options: ['default', 'success', 'danger', 'info'],
    },
    label: {
      control: 'text',
    },
    inValid: {
      control: 'boolean',
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
    label: 'Button',
  },
};

// Solid variant 모든 조합
export const AllSolidButtons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Solid - Default Size</h2>
        <div className="flex gap-4">
          <CommonButton label="Rest" />
          <CommonButton label="Rest" bgColor="success" />
          <CommonButton label="Rest" bgColor="danger" />
          <CommonButton label="Rest" bgColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Solid - Medium Size</h2>
        <div className="flex gap-4">
          <CommonButton label="Get started" size="me" />
          <CommonButton label="Get started" size="me" bgColor="success" />
          <CommonButton label="Get started" size="me" bgColor="danger" />
          <CommonButton label="Get started" size="me" bgColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Solid - Large Size</h2>
        <div className="flex gap-4">
          <CommonButton label="Get started" size="lg" />
          <CommonButton label="Get started" size="lg" bgColor="success" />
          <CommonButton label="Get started" size="lg" bgColor="danger" />
          <CommonButton label="Get started" size="lg" bgColor="info" />
        </div>
      </div>
    </div>
  ),
};

// Outline variant 모든 조합
export const AllOutlineButtons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Outline - Default Size</h2>
        <div className="flex gap-4">
          <CommonButton label="Rest" variant="outline" />
          <CommonButton label="Rest" variant="outline" outlineColor="success" />
          <CommonButton label="Rest" variant="outline" outlineColor="danger" />
          <CommonButton label="Rest" variant="outline" outlineColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Outline - Medium Size</h2>
        <div className="flex gap-4">
          <CommonButton label="Get started" variant="outline" size="me" />
          <CommonButton label="Get started" variant="outline" size="me" outlineColor="success" />
          <CommonButton label="Get started" variant="outline" size="me" outlineColor="danger" />
          <CommonButton label="Get started" variant="outline" size="me" outlineColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Outline - Large Size</h2>
        <div className="flex gap-4">
          <CommonButton label="Get started" variant="outline" size="lg" />
          <CommonButton label="Get started" variant="outline" size="lg" outlineColor="success" />
          <CommonButton label="Get started" variant="outline" size="lg" outlineColor="danger" />
          <CommonButton label="Get started" variant="outline" size="lg" outlineColor="info" />
        </div>
      </div>
    </div>
  ),
};

// 상태 테스트
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4">
        <CommonButton label="Normal" />
        <CommonButton label="Disabled" disabled />
        <CommonButton label="Invalid" inValid />
      </div>
      <div className="flex gap-4">
        <CommonButton label="Normal" variant="outline" />
        <CommonButton label="Disabled" variant="outline" disabled />
        <CommonButton label="Invalid" variant="outline" inValid />
      </div>
    </div>
  ),
};

// 사용법 가이드 스토리
export const HowToUse: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg max-w-2xl">
      <h2 className="text-xl font-bold">CommonButton 사용법</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Import</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`import { CommonButton } from '@/components/ui/button';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 기본 사용법</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CommonButton label="버튼 텍스트" />

// 또는 children 사용
<CommonButton>버튼 텍스트</CommonButton>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. Solid 버튼 (배경색 있음)</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CommonButton label="기본" />
<CommonButton label="성공" bgColor="success" />
<CommonButton label="위험" bgColor="danger" />
<CommonButton label="정보" bgColor="info" />

// 크기 변경
<CommonButton label="중간" size="me" bgColor="success" />
<CommonButton label="큰" size="lg" bgColor="danger" />`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Outline 버튼 (테두리만)</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CommonButton label="기본" variant="outline" />
<CommonButton 
  label="성공" 
  variant="outline" 
  outlineColor="success" 
/>
<CommonButton 
  label="위험" 
  variant="outline" 
  outlineColor="danger" 
  size="lg" 
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">5. 상태 제어</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CommonButton label="비활성화" disabled />
<CommonButton label="유효하지 않음" inValid />
<CommonButton 
  label="클릭 이벤트" 
  onClick={() => console.log('클릭!')} 
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">6. Props</h3>
          <div className="bg-white p-4 rounded border">
            <ul className="space-y-2 text-sm">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">variant</code>: 'default' |
                'outline' (기본값: 'default')
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">size</code>: 'default' | 'me' | 'lg'
                (기본값: 'default')
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">bgColor</code>: 'default' |
                'success' | 'danger' | 'info' (Solid용)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">outlineColor</code>: 'default' |
                'success' | 'danger' | 'info' (Outline용)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">label</code>: string (children 대신
                사용 가능)
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">inValid</code>: boolean (버튼
                비활성화)
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
