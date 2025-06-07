// IconButton.stories.tsx
import { IconButton } from '@/components/common/IconButton';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'IconButton은 다양한 아이콘과 스타일 옵션을 제공하는 버튼 컴포넌트입니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'select',
      options: ['bookmark', 'back', 'alarm'],
      description: '표시할 아이콘 타입',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      description: '버튼의 스타일 변형',
    },
    color: {
      control: 'select',
      options: ['neutral', 'primary', 'white'],
      description: '버튼의 컬러 테마',
    },
    size: {
      control: 'select',
      options: ['sm', 'md'],
      description: '버튼의 크기',
    },
    state: {
      control: 'boolean',
      description: '북마크 아이콘의 상태 (활성/비활성)',
      if: { arg: 'icon', eq: 'bookmark' },
    },
    bgColor: {
      control: 'select',
      options: ['white', 'gray'],
      description: '배경색 (solid variant에서만 적용)',
      if: { arg: 'variant', eq: 'solid' },
    },
    onClick: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    icon: 'bookmark',
    variant: 'solid',
    color: 'neutral',
    size: 'md',
    bgColor: 'gray',
    state: false,
  },
};

// Solid 버튼들
export const SolidButtons: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <IconButton icon="alarm" variant="solid" color="neutral" size="md" bgColor="gray" />
      <IconButton icon="alarm" variant="solid" color="neutral" size="sm" bgColor="gray" />
      <IconButton icon="back" variant="solid" color="neutral" size="md" bgColor="white" />
      <IconButton icon="back" variant="solid" color="neutral" size="sm" bgColor="white" />
      <IconButton
        icon="bookmark"
        variant="solid"
        color="neutral"
        size="md"
        bgColor="gray"
        state={true}
      />
      <IconButton
        icon="bookmark"
        variant="solid"
        color="neutral"
        size="sm"
        bgColor="white"
        state={false}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Solid 스타일의 다양한 IconButton 예시입니다.',
      },
    },
  },
};

// Outlined 버튼들
export const OutlinedButtons: Story = {
  render: () => {
    const [isBookmarked, setIsBookmarked] = React.useState(false);

    return (
      <div className="flex gap-4 flex-wrap">
        <IconButton
          icon="bookmark"
          variant="outlined"
          color="primary"
          size="md"
          state={isBookmarked}
          onClick={() => setIsBookmarked((prev) => !prev)}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Outlined 스타일의 IconButton 예시입니다. 북마크 버튼을 클릭해보세요.',
      },
    },
  },
};

// White 컬러 (어두운 배경)
export const WhiteButtons: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <IconButton icon="bookmark" variant="outlined" color="white" size="md" />
      <IconButton icon="bookmark" variant="outlined" color="white" size="sm" />
    </div>
  ),
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#333333' }],
    },
    docs: {
      description: {
        story: '어두운 배경에서 사용하는 흰색 테마의 IconButton입니다.',
      },
    },
  },
};
