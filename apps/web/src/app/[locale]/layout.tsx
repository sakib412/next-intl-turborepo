import type {Metadata} from 'next';
import {NextIntlClientProvider, hasLocale} from '@repo/i18n';
import '../globals.css';
import {routing} from '@repo/i18n/routing';
import {notFound} from 'next/navigation';

export const metadata: Metadata = {
  title: 'Next Intl Turborepo',
  description: 'A Next.js app using Next Intl with Turborepo',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}>) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
