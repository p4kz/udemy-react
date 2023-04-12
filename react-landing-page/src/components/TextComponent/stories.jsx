import { TextComponent } from '.'

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
    Consequuntur sit voluptates sint minus ad illum maxime 
    veritatis earum aspernatur dignissimos sunt, molestias 
    ea eius eligendi unde expedita fuga quo voluptatum.
    `,
  },
  argTypes: {
    children: {type: 'string'},
  },
}

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  )
}