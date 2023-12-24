import {Meta, StoryObj} from '@storybook/react' 
import {Text, TextProps} from '../components/TextRoboto'

export default {
  title: 'components/TextRoboto',
  component: Text,
  args: {
    children: 'Loren ipson..',
    size: 'm',
    vWeight: 'Regular'
  },
  argTypes: {
    size: {
      options: ['l' , 'm' , 's' , 'xs'],
      control: {
        type: 'inline-radio'
      }
    },
    vWeight: {
      options: ['Regular', 'Bold'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj  = {}