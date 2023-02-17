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
          label: '取消',
        },
      ]}
    >
      <div className={styles.settingContent}>
        <p>
          在你开始使用 AI Assistant 之前，我们需要你提供一个 API 密钥。目前，我们只支持
          OpenAI，但很快就会有更多的支持。你可以通过{' '}
          <a href="https://platform.openai.com/account/api-keys" target="_blank">
            链接
          </a>{' '}
          获得 API Key
        </p>

        <br />

        <p>如果您不设置，AI Assistant 会提供免费的服务，但是这可能不太稳定</p>

        <br />

        <label>Open API Key</label>
        <Input value={setting.apiKey || ''} onChange={onChangeAPIKey} placeholder="请输入..." />
      </div>
    </Modal>
  );
}
