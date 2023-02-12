import PROMPTS from '@/scripts/prompts.json';

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

export const siteConstants = {
  ga: process.env.SITE_GOOGLE_ANALYTICS,
};

function getApiKeys() {
  const str = process.env.OPENAI_API_KEY || '';

  return str.split(',');
}
