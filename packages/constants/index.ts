export const chatgptConstants = {
  apiKeys: getApiKeys(),
  maxContinuousCount: 10,
};

function getApiKeys() {
  const str = process.env.OPENAI_API_KEY || '';

  return str.split(',');
}
