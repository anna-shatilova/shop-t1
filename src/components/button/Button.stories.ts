import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import '../../index.css'

const meta = {
  title: 'Button',
  component: Button,

  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const ButtonMP: Story = {
  args: {
    mode: true,
    label: 'Go to shopping',
    typeButton: 'button',
  },
}

export const ButtonPP: Story = {
  args: {
    mode: false,
    label: 'Add to cart',
    typeButton: 'button',
  },
}
export const ButtonLP: Story = {
  args: {
    mode: false,
    label: 'Sign in',
    typeButton: 'submit',
  },
}

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// const meta = {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
//   // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
//   args: { onClick: fn() },
// } satisfies Meta<typeof Button>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const : Story = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary: Story = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small: Story = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// import React from 'react';
// import './button.css';

// export interface ButtonProps {
//   /**
//    * Is this the principal call to action on the page?
//    */
//   primary?: boolean;
//   /**
//    * What background color to use
//    */
//   backgroundColor?: string;
//   /**
//    * How large should the button be?
//    */
//   size?: 'small' | 'medium' | 'large';
//   /**
//    * Button contents
//    */
//   label: string;
//   /**
//    * Optional click handler
//    */
//   onClick?: () => void;
// }

// /**
//  * Primary UI component for user interaction
//  */
// export const Button = ({
//   primary = false,
//   size = 'medium',
//   backgroundColor,
//   label,
//   ...props
// }: ButtonProps) => {
//   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
//   return (
//     <button
//       type="button"
//       className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
//       style={{ backgroundColor }}
//       {...props}
//     >
//       {label}
//     </button>
//   );
// };

// .storybook-button {
//     font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
//     font-weight: 700;
//     border: 0;
//     border-radius: 3em;
//     cursor: pointer;
//     display: inline-block;
//     line-height: 1;
//   }
//   .storybook-button--primary {
//     color: white;
//     background-color: #1ea7fd;
//   }
//   .storybook-button--secondary {
//     color: #333;
//     background-color: transparent;
//     box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
//   }
//   .storybook-button--small {
//     font-size: 12px;
//     padding: 10px 16px;
//   }
//   .storybook-button--medium {
//     font-size: 14px;
//     padding: 11px 20px;
//   }
//   .storybook-button--large {
//     font-size: 16px;
//     padding: 12px 24px;
//   }
