import { Button, ButtonProps } from "./Button"
import {Meta, StoryObj} from '@storybook/react'


export default {
    title: 'Components/Button',
    component: Button,

    args: {
        children: 'Login',
    }, 

    argTypes: {
        asChild: {
            table: {
                disable: true,
            }
        }
    }

} as Meta<ButtonProps>

export const Default: StoryObj <ButtonProps> = {}


