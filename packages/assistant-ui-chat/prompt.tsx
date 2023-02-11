import { Modal, ModalProps, List, ListItem } from '@chatui/core';
import PROMPTS from '@/scripts/prompts.json';
import classnames from 'classnames';
import styles from './ai-chat.module.css';
import { Prompt, useAIChatContext } from './hooks';
import { useEffect, useState } from 'react';

export function PromptModal(
  props: ModalProps & {
    onChangePrompt?: (prompt: Prompt) => void;
  },
) {
  const { prompt } = useAIChatContext();
  const [selectedPrompt, setSelectedPrompt] = useState(prompt);

  useEffect(() => {
    if (props.active) {
      setSelectedPrompt(prompt);
    }
  }, [props.active, prompt]);

  const handleConfirm = () => {
    props.onChangePrompt && props.onChangePrompt(selectedPrompt);
    props.onClose && props.onClose();
  };

  return (
    <Modal
      active={props.active}
      title="变换角色"
      showClose={false}
      onClose={props.onClose}
      actions={[
        {
          label: '确认',
          onClick: handleConfirm,
          color: 'primary',
        },
        {
          label: '取消',
        },
      ]}
    >
      <div className={styles.promptList}>
        <List>
          {PROMPTS.map(item => {
            const isActive = selectedPrompt.id === item.id;

            return (
              <ListItem
                onClick={() => setSelectedPrompt(item)}
                content={item.act_zh}
                key={item.prompt}
                className={classnames({
                  [styles.promptListItemActive]: isActive,
                })}
              />
            );
          })}
        </List>
      </div>
    </Modal>
  );
}
