import PROMPTS from '@/scripts/prompts.json';
import path from 'path';

export const __DEV__ = process.env.NODE_ENV === 'development';

export type Prompt = {
  act: string;
  prompt: string;
  act_zh: string;
  id: number;
};

const ASSISTANT_LABEL_DEFAULT = 'ChatGPT';

export const promptConstants = {
  prompts: PROMPTS,
};

export const chatgptConstants = {
  apiKeys: getApiKeys(),
  maxContinuousCount: 10,
  promptSuffix: `\n\n${ASSISTANT_LABEL_DEFAULT}:\n`,
};

if (process.env.SITE_GOOGLE_ANALYTICS) {
  deprecated('dont use env.SITE_GOOGLE_ANALYTICS any more, instead of env.GA_TRACKING_ID');
}

export const siteConstants = {
  ga: process.env.GA_TRACKING_ID,
  settingStoragePrefix: 'ai-assisatant-storage',
};

const devStorePath = path.resolve(__dirname, '../../message-store.json');
const prodStorePath = path.join('/tmp', 'message-store.json');

export const systemConstants = {
  messageStorePath: __DEV__ ? devStorePath : prodStorePath,
};

function getApiKeys() {
  const str = process.env.OPENAI_API_KEY || '';

  return str.split(',');
}

function deprecated(message: string) {
  console.warn(`[DEPRECATED] ${message}`);
}
