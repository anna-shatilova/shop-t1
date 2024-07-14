import type { Meta, StoryObj } from '@storybook/react'
import '../../index.css'
import Navigation from './Navigation'
import { Provider } from 'react-redux'
import store from '../../store/store'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Navigation',
  component: Navigation,
  decorators: [
    (story) => (
      <Provider store={store}>
        <BrowserRouter>{story()}</BrowserRouter>
      </Provider>
    ),
  ],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: {},
} satisfies Meta<typeof Navigation>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderNav: Story = {
  args: {
    panel: 'header',
  },
}

export const FooterNav: Story = {
  args: {
    panel: 'footer',
  },
}
