import type { Meta, StoryObj } from '@storybook/react';
import { PropertyCard } from '../components/common/propertyCard/PropertyCard';

const meta = {
  component: PropertyCard,
  title: 'Components/PropertyCard',
  tags: ['autodocs'],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: '카드의 방향을 설정합니다.',
    },
    size: {
      control: { type: 'select' },
      options: ['medium', 'large'],
      description: '카드의 크기를 설정합니다.',
    },
    title: {
      control: { type: 'text' },
      description: '부동산 제목',
    },
    currentPrice: {
      control: { type: 'number' },
      description: '현재 경매가격',
    },
    myBid: {
      control: { type: 'number' },
      description: '내 입찰가 (horizontal에서만 표시)',
    },
    date: {
      control: { type: 'text' },
      description: '경매 날짜',
    },
    location: {
      control: { type: 'text' },
      description: '매장 위치',
    },
    bidderCount: {
      control: { type: 'number' },
      description: '입찰자 수',
    },
    timeLeft: {
      control: { type: 'text' },
      description: '남은 시간',
    },
    imageUrl: {
      control: { type: 'text' },
      description: '매장 이미지 URL',
    },
  },
} satisfies Meta<typeof PropertyCard>;

export default meta;
type Story = StoryObj<typeof PropertyCard>;

// 기본 데이터
const defaultArgs = {
  title: '명품한우 강남점 2인석',
  currentPrice: 50000,
  date: '2025-06-07',
  location: '강남구 · 2인석 · 한식',
  bidderCount: 10,
  timeLeft: '00:00:00',
  imageUrl: '/images/example.png',
  myBid: 75000,
};

export const VerticalMedium: Story = {
  args: {
    ...defaultArgs,
    direction: 'vertical',
    size: 'medium',
  },
  parameters: {
    docs: {
      description: {
        story: '세로형 중간 크기 카드입니다. 날짜가 아래쪽 정보 영역에 표시됩니다.',
      },
    },
  },
};

export const VerticalLarge: Story = {
  args: {
    ...defaultArgs,
    direction: 'vertical',
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: '세로형 큰 크기 카드입니다. 날짜가 제목 옆에 표시됩니다.',
      },
    },
  },
};

export const Horizontal: Story = {
  args: {
    ...defaultArgs,
    direction: 'horizontal',
  },
  parameters: {
    docs: {
      description: {
        story: '가로형 큰 크기 카드입니다. 현재가와 내 입찰가가 모두 표시됩니다.',
      },
    },
  },
};

// 컴포넌트 그리드 (여러 상태를 한번에 보기)
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Vertical Cards</h3>
        <div className="flex gap-4">
          <PropertyCard {...defaultArgs} direction="vertical" size="medium" />
          <PropertyCard {...defaultArgs} direction="vertical" size="large" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Horizontal Cards</h3>
        <div className="space-y-4">
          <PropertyCard {...defaultArgs} direction="horizontal" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: '모든 variants를 한번에 비교해볼 수 있습니다.',
      },
    },
  },
};
