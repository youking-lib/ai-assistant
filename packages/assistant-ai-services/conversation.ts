import type { SendMessageOptions, ChatMessage } from 'chatgpt';
import { trySendMessage } from './client';
import { trySendMessage as trySendMessageWithPrivate } from './private-client';

export { ChatMessage, SendMessageOptions };

export class AIConversation {
  static async question(question: string, options: SendMessageOptions) {
    return await trySendMessage(question, options);
  }

  static async questionWithPrivateKey(key: string, question: string, options: SendMessageOptions) {
    return await trySendMessageWithPrivate(key, question, options);
  }
}
