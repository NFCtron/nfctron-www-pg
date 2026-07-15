import { cookies, headers } from 'next/headers';
import { resolveLocale, type Locale } from './config';

export async function getLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const saved = cookieStore.get('nfctron-locale')?.value;
  if (saved) return resolveLocale(saved);
  const headerStore = await headers();
  return resolveLocale(headerStore.get('accept-language'));
}
