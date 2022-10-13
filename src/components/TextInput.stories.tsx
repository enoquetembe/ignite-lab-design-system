import { TextInput, TextInputInputProps, TextInputRootProps } from "./TextInput"
import {Meta, StoryObj} from '@storybook/react'
import {Envelope} from 'phosphor-react'


export default {
    title: 'Components/TextInput',
    component: TextInput.Root,

    args: {
        children: [
            
            <TextInput.Icon>
                <Envelope/>
             </TextInput.Icon>,
            <TextInput.Input placeholder="enoque@example.com"/>   
            
        ]
    }, 

    argTypes: {
        children: {
            table: {
                disable: true,
            }
        }
    }

} as Meta<TextInputInputProps>

export const Default: StoryObj <TextInputInputProps> = {}

export const WhithoutIcon: StoryObj <TextInputInputProps> = {
    args: {
        children:  <TextInput.Input placeholder="enoque@example.com"/> ,  
    }
}


