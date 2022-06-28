import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const Blue = Template.bind({});
Blue.args = {
  size: 'large',
  label: 'Button',
  backgroundColor: 'yellow',  
};
Blue.argTypes =  {
  backgroundColor:
  {
control: 'inline-radio',
options: ['red', 'blue', 'green']
  }
}
Blue.parameters={
  design: {
    type: "figma",
    url: "https://www.figma.com/file/nj63mCI9EVORFvlvs1oDug/Fix-MVP---OSUD-263-283-290-264-288-278-279-280-321-351-354-366-379-329-394-403-415?node-id=3803%3A108756",
  },
}