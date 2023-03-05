import React from 'react';
import PROMPTS from '@/scripts/prompts.json';
import { siteConstants } from '../constants';

export type Prompt = {
  act: string;
  prompt: string;
  act_zh: string;
  id: number;
};

export type AIChatContextType = {
  prompt: Prompt;
  setting: {
    apiKey: string | null;
  };
};

export const defaultAIChatContext: AIChatContextType = {
  prompt: PROMPTS[0]!,
  setting: storageGetSetting(),
};

export const AIChatContext = React.createContext<AIChatContextType>(defaultAIChatContext);

export function useAIChatContext() {
  return React.useContext(AIChatContext);
}

export function useAiChatSetting() {
  return useAIChatContext().setting;
}

export function storageGetSetting(): AIChatContextType['setting'] {
  const str = localStorage.getItem(siteConstants.settingStoragePrefix);

  if (!str) {
    return {
      apiKey: null,
    };
  }

  return JSON.parse(str);
}

export function storageSetSetting(setting: AIChatContextType['setting']) {
  localStorage.setItem(siteConstants.settingStoragePrefix, JSON.stringify(setting));
}
