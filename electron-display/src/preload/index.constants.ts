import type { ApiOnMethods, ApiRemoveListenerMethods, ApiSendMethods } from './index.types';

export const API_SEND_VALID_CHANNELS: Array<keyof ApiSendMethods> = ['example-send', 'register-id'];

export const API_ON_VALID_CHANNELS: Array<keyof ApiOnMethods> = ['example-on', 'get-contents'];

export const API_REMOVE_LISTENER_VALID_CHANNELS: Array<keyof ApiRemoveListenerMethods> = [
  ...API_ON_VALID_CHANNELS,
];
