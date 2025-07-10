import {getRequestConfig} from '@repo/i18n/server';
import {hasLocale} from '@repo/i18n';
import {routing} from '@repo/i18n/routing';

export default getRequestConfig(async function createRequestConfig({
  requestLocale,
}) {
  // Typically corresponds to the `[locale]` segment
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`@repo/i18n/messages/en`)).default,
  };
});
