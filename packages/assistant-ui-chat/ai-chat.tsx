import '@chatui/core/dist/index.css';
// 引入组件
import Chat, { Bubble, useMessages, ChatProps } from '@chatui/core';

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

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' },
        });
      }, 1000);
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
