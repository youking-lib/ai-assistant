import { atom } from 'recoil';

export type Prompt = {
  act: string;
  prompt: string;
  act_zh: string;
  id: number;
};

export type Setting = {
  apiKey: string | null;
};

const Setting = atom();
