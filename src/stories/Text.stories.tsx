import {Meta, StoryObj} from '@storybook/react' 
import {Text, TextProps} from '../components/Text'

export default {
  title: 'components/Text',
  component: Text,
  args: {
    children: 'Loren ipson..',
    size: 'm',
    family: 'Roboto'
  },
  argTypes: {
    size: {
      options: ['xl', 'l' , 'm' , 's' , 'xs'],
      control: {
        type: 'inline-radio'
      }
    },
    family: {
          options: ['Baloo', 'Roboto'],
          control: {
            type: 'inline-radio'
          }
    }
  }
} as Meta<TextProps>

export const Default: StoryObj  = {}