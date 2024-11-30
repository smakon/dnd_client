import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof Button>

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Button'
  },
};