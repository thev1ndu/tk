export const WIDGET_SCREENS = {
  ERROR: 'error',
  LOADING: 'loading',
  SELECTION: 'selection',
  AUTH: 'auth',
  INBOX: 'inbox',
  CHAT: 'chat'
} as const;

export type WidgetScreen = (typeof WIDGET_SCREENS)[keyof typeof WIDGET_SCREENS];
