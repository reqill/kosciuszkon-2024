export type ApiSendMethods = {
  'example-send': (arg: string) => void;
};

export type ApiOnMethods = {
  'example-on': (arg: string) => void;
};

export type ApiRemoveListenerMethods = ApiOnMethods;

export type ApiSend<K extends keyof ApiSendMethods = keyof ApiSendMethods> = (
  channel: K,
  ...args: Parameters<ApiSendMethods[K]>
) => void;

export type ApiOn = (channel: keyof ApiOnMethods, func: ApiOnMethods[keyof ApiOnMethods]) => void;

export type ApiRemoveListener = (
  channel: keyof ApiRemoveListenerMethods,
  func: ApiRemoveListenerMethods[keyof ApiRemoveListenerMethods]
) => void;

export type Api = {
  send: ApiSend;
  on: ApiOn;
  removeListener: ApiRemoveListener;
};
