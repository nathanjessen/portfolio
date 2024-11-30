import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from './Brand';

const meta = {
  title: 'Components/Brand',
  component: Brand,
  decorators: [
    (Story) => (
      <div className='max-w-4xl'>
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'Brand Name',
  },
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof Brand>;

export const Default: Story = {
  args: {},
};

export const Position: Story = {
  args: {
    position: 'Software Developer',
  },
};

export const Avatar: Story = {
  args: {
    avatarUrl: '/assets/images/avatar-person.png',
  },
};

export const AvatarAndPosition: Story = {
  args: {
    avatarUrl: '/assets/images/avatar-person.png',
    position: 'Software Developer',
  },
};
