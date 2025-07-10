'use client';
import {useTranslations} from '@repo/i18n';
import {Link} from '@repo/i18n/navigation';
import React from 'react';

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <Link href="/">{t('backToHome')}</Link>
    </div>
  );
}
