import { Modal, ModalProps, List, ListItem } from '@chatui/core';
import classnames from 'classnames';
import styles from './ai-chat.module.css';
import { Prompt, useAIChatContext } from './hooks';
import { useEffect, useState } from 'react';
import { promptConstants } from '../constants';

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
    // @ts-ignore
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
          onClick: props.onClose,
          label: '取消',
        },
      ]}
    >
      <div className={styles.promptList}>
        {/* @ts-ignore */}
        <List>
          {promptConstants.prompts.map(item => {
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
