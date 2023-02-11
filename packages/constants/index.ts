const ASSISTANT_LABEL_DEFAULT = 'ChatGPT';

export const chatgptConstants = {
  apiKeys: getApiKeys(),
  maxContinuousCount: 10,
  promptSuffix: `\n\n${ASSISTANT_LABEL_DEFAULT}:\n`,
};

function getApiKeys() {
  const str = process.env.OPENAI_API_KEY || '';

  return str.split(',');
}
