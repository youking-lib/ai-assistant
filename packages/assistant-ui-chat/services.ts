import fetch from 'isomorphic-fetch';
import type { SendMessageOptions, ChatMessage } from '@assistant/assistant-ai-services';

export async function postMessage(
  question: string,
  options: SendMessageOptions,
): Promise<ChatMessage> {
  const response = await fetch('/api/conversation', {
    method: 'POST',
    body: JSON.stringify({
      question,
      options,
    }),
  });

  return await response.json();
}

export async function postMessagePrivate(
  apiKey: string | null,
  question: string,
  options: SendMessageOptions,
): Promise<ChatMessage> {
  if (!apiKey) {
    return postMessage(question, options);
  }

  const response = await fetch('/api/conversation-private', {
    method: 'POST',
    body: JSON.stringify({
      apiKey,
      question,
      options,
    }),
  });

  return await response.json();
}
