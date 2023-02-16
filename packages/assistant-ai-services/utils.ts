import Keyv from 'keyv';
import KeyvFile from 'keyv-file';
import { systemConstants } from '@assistant/constants';

export const messageStore = new Keyv({
  store: new KeyvFile({
    filename: systemConstants.messageStorePath,
  }),
});
