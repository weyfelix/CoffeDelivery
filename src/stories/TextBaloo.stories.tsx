import {Meta, StoryObj} from '@storybook/react' 
import {Text, TextProps} from '../components/TextBaloo'

export default {
  title: 'components/TextBaloo',
  component: Text,
  args: {
    children: 'Loren ipson..',
    size: 'm',
    vWeight: 'Bold'
  },
  argTypes: {
    size: {
      options: ['xl', 'l' , 'm' , 's' , 'xs'],
      control: {
        type: 'inline-radio'
      }
    },
    vWeight: {
      options: ['ExtraBold', 'Bold'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj  = {}