import type { SendMessageOptions, ChatMessage } from 'chatgpt';
import { trySendMessage } from './client';

export { ChatMessage, SendMessageOptions };

export class AIConversation {
  static async question(question: string, options: SendMessageOptions) {
    return await trySendMessage(question, options);
  }
}
