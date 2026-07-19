import VisitorHome from "@/components/VisitorHome";
import { getRouteLocale, type LocaleParams } from "@/i18n/routing";

export default async function Home({ params }: { params: LocaleParams }) {
  const locale = await getRouteLocale(params);
  return <VisitorHome locale={locale} />;
}
