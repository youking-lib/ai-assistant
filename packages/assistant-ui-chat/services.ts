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
