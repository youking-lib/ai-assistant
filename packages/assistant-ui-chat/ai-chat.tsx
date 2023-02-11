import '@chatui/core/dist/index.css';
// 引入组件
import Chat, { Bubble, useMessages, ChatProps } from '@chatui/core';
import { postMessage } from './services';

export function AIChat() {
  const { messages, appendMsg, setTyping } = useMessages([]);

  const handleSend: ChatProps['onSend'] = (type: string, val: string) => {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right',
      });

      setTyping(true);

      postMessage(val, {
        conversationId: '',
        parentMessageId: '',
      }).then(res => {
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
    <Chat
      navbar={{ title: '智能助理' }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
    />
  );
}
