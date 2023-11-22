import type {Meta, StoryObj} from '@storybook/react';

import {Button} from './Button';
import {wirespecHandler} from "../wirespec.ts";
import {AddPet, GetPetById} from "../../gen/petstore.ts";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const handleClick = () => {
    fetch('/pet')
        .then(res => res.json())
        .then(json => alert(JSON.stringify(json)))
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        primary: true,
        label: 'Button',
        onClick: handleClick
    },
};

const store = {
    pets:[
        {name: `Doggy`, photoUrls: []}
    ]
}

Primary.parameters = {
    msw: {
        handlers: [
            wirespecHandler<GetPetById.Request, GetPetById.Response>(
                GetPetById.METHOD,
                GetPetById.PATH,
                () => AddPet.response200ApplicationJson({body: store.pets[0]})
            )
        ]
    },
}

export const Secondary: Story = {
    args: {
        label: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
