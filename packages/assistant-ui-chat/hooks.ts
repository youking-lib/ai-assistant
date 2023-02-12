import React from 'react';
import PROMPTS from '@/scripts/prompts.json';

export type Prompt = {
  act: string;
  prompt: string;
  act_zh: string;
  id: number;
};

type Context = {
  prompt: Prompt;
  converstationId?: string;
};

export const defaultAIChatContext: Context = {
  prompt: PROMPTS[0]!,
};

export const AIChatContext = React.createContext<Context>(defaultAIChatContext);

export function useAIChatContext() {
  return React.useContext(AIChatContext);
}
