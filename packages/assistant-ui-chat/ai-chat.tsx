// 引入组件
import '@chatui/core/dist/index.css';
import { useState } from 'react';
import Chat, { Bubble, useMessages, ChatProps } from '@chatui/core';
import { postMessage } from './services';
import { PromptModal } from './prompt';
import {
  AIChatContext,
  AIChatContextType,
  defaultAIChatContext,
  Prompt,
  storageSetSetting,
} from './hooks';
import { SettingModal } from './setting';

export function AIChat() {
  const { messages, appendMsg, setTyping } = useMessages([]);
  const [context, setContext] = useState(defaultAIChatContext);
  const [lastestMessageId, setLastestMessageId] = useState<string>();
  const [promptModalOpen, setPromptModalOpen] = useState(false);
  const [settingModalOpen, setSettingModalOpen] = useState(!Boolean(context.setting.apiKey));

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

  const setSetting = (setting: Partial<AIChatContextType['setting']>) => {
    const nextSetting = {
      ...context.setting,
      ...setting,
    };

    storageSetSetting(nextSetting);
    setContext({
      ...context,
      setting: nextSetting,
    });
  };

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
      <SettingModal
        active={settingModalOpen}
        onClose={() => setSettingModalOpen(false)}
        onConfirm={setSetting}
      />
      <Chat
        navbar={{
          title: context.prompt.act_zh,
          rightContent: [{ icon: 'apps', onClick: () => setPromptModalOpen(true) }],
          leftContent: { icon: 'ellipsis-h', onClick: () => setSettingModalOpen(true) },
        }}
        messages={messages}
        renderMessageContent={renderMessageContent}
        onSend={handleSend}
      />
    </AIChatContext.Provider>
  );
}
