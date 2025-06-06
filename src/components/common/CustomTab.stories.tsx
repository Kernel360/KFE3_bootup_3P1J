import type { Meta, StoryObj } from '@storybook/react';
import { CustomTab } from './CustomTab';
import { useState } from 'react';

const meta: Meta<typeof CustomTab> = {
  title: 'Components/CustomTab',
  component: CustomTab,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    defaultValue: {
      control: 'text',
      description: '기본 선택된 탭',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 탭 데이터
const basicTabs = [
  { value: 'menu1', label: 'Menu 1' },
  { value: 'menu2', label: 'Menu 2' },
];

const threeTabs = [
  { value: 'tab1', label: 'Tab 1' },
  { value: 'tab2', label: 'Tab 2' },
  { value: 'tab3', label: 'Tab 3' },
];

const categoryTabs = [
  { value: 'home', label: '홈' },
  { value: 'products', label: '제품' },
];

// 기본 스토리
export const Default: Story = {
  args: {
    items: basicTabs,
  },
};

// 3개 탭
export const ThreeTabs: Story = {
  args: {
    items: threeTabs,
    defaultValue: 'tab2',
  },
};

// 한국어 탭
export const KoreanTabs: Story = {
  args: {
    items: categoryTabs,
  },
};

// 이벤트 핸들러 테스트
export const WithEventHandler: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('menu1');

    return (
      <div className="space-y-4">
        <CustomTab
          items={basicTabs}
          defaultValue="menu1"
          onValueChange={(value) => {
            setActiveTab(value);
            console.log('선택된 탭:', value);
          }}
        />
        <div className="text-sm text-gray-600">
          현재 활성 탭: <span className="font-medium">{activeTab}</span>
        </div>
      </div>
    );
  },
};

// 다양한 탭 조합
export const AllVariations: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-4">2개 탭 (기본)</h3>
        <CustomTab items={basicTabs} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">3개 탭</h3>
        <CustomTab items={threeTabs} />
      </div>

      <div>
        <h3 className="text-sm font-medium mb-4">한국어 탭</h3>
        <CustomTab items={categoryTabs} />
      </div>
    </div>
  ),
};

// 사용법 가이드 스토리
export const HowToUse: Story = {
  render: () => (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg max-w-2xl">
      <h2 className="text-xl font-bold">CustomTab 사용법</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">1. Import</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`import { CustomTab } from '@/components/ui/tabs';`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">2. 기본 사용법</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`<CustomTab 
  items={[
    { value: 'tab1', label: 'Tab 1' },
    { value: 'tab2', label: 'Tab 2' },
  ]}
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">3. 기본값과 이벤트 처리</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`const [activeTab, setActiveTab] = useState('tab1');

<CustomTab 
  items={tabItems}
  defaultValue="tab1"
  onValueChange={(value) => setActiveTab(value)}
/>`}
          </pre>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">4. Props</h3>
          <div className="bg-white p-4 rounded border">
            <ul className="space-y-2 text-sm">
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">items</code>: TabItem[] (필수) - 탭
                목록
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">defaultValue</code>: string - 기본
                선택 탭
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">onValueChange</code>: (value:
                string) =&gt; void - 탭 변경 이벤트
              </li>
              <li>
                <code className="bg-gray-100 px-2 py-1 rounded">className</code>: string - 추가 CSS
                클래스
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">5. TabItem 타입</h3>
          <pre className="bg-black text-green-400 p-3 rounded text-sm overflow-x-auto">
            {`interface TabItem {
  value: string;  // 탭의 고유 값
  label: string;  // 탭에 표시될 텍스트
}`}
          </pre>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
