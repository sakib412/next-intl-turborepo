import {Link} from '@repo/i18n/navigation';
import {getTranslations} from '@repo/i18n/server';

export default async function HomePage() {
  const t = await getTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}
