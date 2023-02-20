import { Drawer } from './drawer';
import { Navbar } from './navbar';
import { PromptMenu } from './prompt';

export const AIChat = () => {
  return <Drawer content={<Navbar />} side={<PromptMenu />} />;
};
