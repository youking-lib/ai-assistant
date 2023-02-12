import '@chatui/core/dist/index.css';
// 引入组件
import { useState } from 'react';
import Chat, { Bubble, useMessages, ChatProps } from '@chatui/core';
import { postMessage } from './services';
import { PromptModal } from './prompt';
import { AIChatContext, defaultAIChatContext, Prompt } from './hooks';

export function AIChat() {
  const { messages, appendMsg, setTyping } = useMessages([]);
  const [promptModalOpen, setPromptModalOpen] = useState(true);
  const [context, setContext] = useState(defaultAIChatContext);
  const [lastestMessageId, setLastestMessageId] = useState<string>();

  const setCoversationId = (id?: string) =>
    setContext({
      ...context,
      converstationId: id,
    });

  const setPrompt = (selectedPrompt: Prompt) =>
    setContext({
      ...context,
      prompt: selectedPrompt,
    });

  const handleSend: ChatProps['onSend'] = (type: string, val: string) => {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      postMessage(val, {
        promptPrefix: context.prompt.prompt,
        conversationId: context.converstationId,
        parentMessageId: lastestMessageId,
      }).then(res => {
        setCoversationId(res.conversationId);
        setLastestMessageId(res.id);

        appendMsg({
          type: 'text',
          content: { text: res.text },
        });
      });
    }
  };

  const renderMessageContent: ChatProps['renderMessageContent'] = msg => {
    const { content } = msg;
    return <Bubble content={content.text} />;
  };

  return (
    <AIChatContext.Provider value={context}>
      <PromptModal
        active={promptModalOpen}
        onClose={() => setPromptModalOpen(false)}
        onChangePrompt={setPrompt}
      />
      <Chat
        navbar={{
          title: context.prompt.act_zh,
          rightContent: [{ icon: 'apps', onClick: () => setPromptModalOpen(true) }],
        }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
    </AIChatContext.Provider>
  );
}
