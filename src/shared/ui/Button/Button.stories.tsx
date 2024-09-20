import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonTheme } from "./Button";
import "app/styles/index.scss";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
// Default theme
export const Default = Template.bind({});
Default.args = {
  children: "Button",
  theme: ButtonTheme.DEFAULT,
};

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: "Button",
  theme: ButtonTheme.DEFAULT,
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
// Clear theme
export const Clear = Template.bind({});
Clear.args = {
  children: "Button",
  theme: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  children: "Button",
  theme: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
