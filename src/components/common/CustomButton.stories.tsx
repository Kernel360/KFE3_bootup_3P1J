import type { Meta, StoryObj } from '@storybook/react';
import { CustomButton } from './CustomButton';

const meta: Meta<typeof CustomButton> = {
  title: 'Components/CustomButton',
  component: CustomButton,
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
          <CustomButton label="Rest" />
          <CustomButton label="Rest" bgColor="success" />
          <CustomButton label="Rest" bgColor="danger" />
          <CustomButton label="Rest" bgColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Solid - Medium Size</h2>
        <div className="flex gap-4">
          <CustomButton label="Get started" size="me" />
          <CustomButton label="Get started" size="me" bgColor="success" />
          <CustomButton label="Get started" size="me" bgColor="danger" />
          <CustomButton label="Get started" size="me" bgColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Solid - Large Size</h2>
        <div className="flex gap-4">
          <CustomButton label="Get started" size="lg" />
          <CustomButton label="Get started" size="lg" bgColor="success" />
          <CustomButton label="Get started" size="lg" bgColor="danger" />
          <CustomButton label="Get started" size="lg" bgColor="info" />
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
          <CustomButton label="Rest" variant="outline" />
          <CustomButton label="Rest" variant="outline" outlineColor="success" />
          <CustomButton label="Rest" variant="outline" outlineColor="danger" />
          <CustomButton label="Rest" variant="outline" outlineColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Outline - Medium Size</h2>
        <div className="flex gap-4">
          <CustomButton label="Get started" variant="outline" size="me" />
          <CustomButton label="Get started" variant="outline" size="me" outlineColor="success" />
          <CustomButton label="Get started" variant="outline" size="me" outlineColor="danger" />
          <CustomButton label="Get started" variant="outline" size="me" outlineColor="info" />
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Outline - Large Size</h2>
        <div className="flex gap-4">
          <CustomButton label="Get started" variant="outline" size="lg" />
          <CustomButton label="Get started" variant="outline" size="lg" outlineColor="success" />
          <CustomButton label="Get started" variant="outline" size="lg" outlineColor="danger" />
          <CustomButton label="Get started" variant="outline" size="lg" outlineColor="info" />
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
        <CustomButton label="Normal" />
        <CustomButton label="Disabled" disabled />
        <CustomButton label="Invalid" inValid />
      </div>
      <div className="flex gap-4">
        <CustomButton label="Normal" variant="outline" />
        <CustomButton label="Disabled" variant="outline" disabled />
        <CustomButton label="Invalid" variant="outline" inValid />
      </div>
    </div>
  ),
};

// 사용법 가이드 스토리
export const HowToUse: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg max-w-2xl">
      <h2 className="text-xl font-bold">CustomButton 사용법</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Import</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`import { CustomButton } from '@/components/ui/button';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 기본 사용법</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomButton label="버튼 텍스트" />

// 또는 children 사용
<CustomButton>버튼 텍스트</CustomButton>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. Solid 버튼 (배경색 있음)</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomButton label="기본" />
<CustomButton label="성공" bgColor="success" />
<CustomButton label="위험" bgColor="danger" />
<CustomButton label="정보" bgColor="info" />

// 크기 변경
<CustomButton label="중간" size="me" bgColor="success" />
<CustomButton label="큰" size="lg" bgColor="danger" />`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Outline 버튼 (테두리만)</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomButton label="기본" variant="outline" />
<CustomButton 
  label="성공" 
  variant="outline" 
  outlineColor="success" 
/>
<CustomButton 
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
            {`<CustomButton label="비활성화" disabled />
<CustomButton label="유효하지 않음" inValid />
<CustomButton 
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
