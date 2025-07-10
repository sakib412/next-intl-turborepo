import type {Locale} from './index';
import messages from './messages/en.json';

type Messages = typeof messages;

declare module 'next-intl' {
  interface AppConfig {
    Locale: Locale;
    Messages: Messages;
  }
}
