import Link from "next/link";
import { getDictionary, getLocale } from "@/i18n/get-dictionary";
import { href } from "@/i18n/routes";

export default async function NotFound() {
  const locale = await getLocale();
  const dict = await getDictionary();

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <p className="font-mono text-sm text-accent-ink">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
        {dict.notFound.title}
      </h1>
      <p className="mt-6 text-ink-muted">{dict.notFound.description}</p>
      <Link href={href(locale)} className="mt-8 inline-block underline underline-offset-4">
        {dict.notFound.backHome}
      </Link>
    </section>
  );
}
