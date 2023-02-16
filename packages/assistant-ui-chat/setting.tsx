import { Modal, Input, ModalProps } from '@chatui/core';
import { useState } from 'react';
import { AIChatContextType, useAiChatSetting } from './hooks';
import styles from './ai-chat.module.css';

type Setting = AIChatContextType['setting'];

export function SettingModal(
  props: ModalProps & {
    onConfirm?: (setting: Setting) => void;
  },
) {
  const defaultSetting = useAiChatSetting();
  const [setting, setSetting] = useState<Setting>(defaultSetting);

  const onChangeAPIKey = (val: string) =>
    setSetting({
      ...setting,
      apiKey: val,
    });

  return (
    // @ts-ignore
    <Modal
      active={props.active}
      title="配置"
      showClose={false}
      onClose={props.onClose}
      actions={[
        {
          label: '确认',
          onClick: () => {
            props.onConfirm && props.onConfirm(setting);
            props.onClose && props.onClose();
          },
          color: 'primary',
        },
        {
          onClick: props.onClose,
          disabled: !Boolean(defaultSetting.apiKey),
          label: '取消',
        },
      ]}
    >
      <div className={styles.settingContent}>
        <p>
          Before you can start using DocsGPT we need you to provide an API key for llm. Currently,
          we support only OpenAI but soon many more. You can find it{' '}
          <a href="https://platform.openai.com/account/api-keys" target="_blank">
            here
          </a>
        </p>

        <br />

        <label>Open API Key</label>
        <Input value={setting.apiKey || ''} onChange={onChangeAPIKey} placeholder="请输入..." />
      </div>
    </Modal>
  );
}
