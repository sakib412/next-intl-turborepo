import type {NextConfig} from 'next';
import createNextIntlPlugin from '@repo/i18n/plugin';

const nextConfig: NextConfig = {};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
