import { ChatGPTAPI, SendMessageOptions } from 'chatgpt';
import QuickLRU from 'quick-lru';
import { messageStore } from './utils';

export async function trySendMessage(
  apiKey: string,
  question: string,
  options: SendMessageOptions,
  tryCount = 2,
) {
  if (!apiKey) {
    throw new Error('Invalid OpenAPI Key');
  }

  const client = await getAvailableClient(apiKey);

  for (let i = 0; i < tryCount; i++) {
    const res = await sendMessage(client, question, options).catch(err => {
      console.error(err);

      return null;
    });

    if (res) {
      return res;
    }
  }

  throw new Error('Try send message error');
}

export async function sendMessage(
  client: ChatGPTAPI,
  question: string,
  options: SendMessageOptions,
) {
  if (!client) {
    throw new Error('No available clients');
  }

  try {
    const res = await client.sendMessage(question, options);
    return res;
  } catch (err) {
    throw err;
  }
}

const clientPool = new QuickLRU<string, ChatGPTAPI>({ maxSize: 200 });

async function getAvailableClient(key: string) {
  if (clientPool.has(key)) {
    return clientPool.get(key)!;
  }

  const { ChatGPTAPI } = await import('chatgpt');

  const client = new ChatGPTAPI({
    apiKey: key,
    debug: true,
    messageStore: messageStore,
  });

  clientPool.set(key, client);

  return client;
}
