// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { AIConversation, ChatMessage, SendMessageOptions } from '@assistant/assistant-ai-services';

export type Output = ChatMessage;
export type Input = { question: string; options: SendMessageOptions };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Output>) {
  const body: Input = JSON.parse(req.body);

  const conversation = await AIConversation.question(body.question, body.options);

  res.status(200).json(conversation);
}
