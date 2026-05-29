/**
 * Slugify a name to match Astro's content-collection ID slugifier.
 * Astro drops punctuation (`.`, `(`, `)`, `,`, etc.) entirely rather than
 * replacing it with a separator; it then collapses whitespace and remaining
 * non-alphanumerics to single hyphens.
 *
 * Examples (matching Astro's output):
 *   "ER6 2.4GHz ELRS PWM Receiver" -> "er6-24ghz-elrs-pwm-receiver"
 *   "Battery 11.1V 850mAh"        -> "battery-111v-850mah"
 *   "Foo (12V 400RPM) Bar"        -> "foo-12v-400rpm-bar"
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    // Drop punctuation that Astro treats as removable (no separator).
    .replace(/[.,()'"`!?:;@#$%^&*+=<>{}\[\]\\|]/g, "")
    // Replace each remaining non-alphanumeric char with a single hyphen.
    // Note: NOT collapsing runs — Astro emits one hyphen per separator char,
    // so "foo  bar" (two spaces) becomes "foo--bar", not "foo-bar".
    .replace(/[^a-z0-9]/g, "-")
    .replace(/(^-+|-+$)/g, "");
}

export interface ResolvedLink {
  name: string;
  slug: string;
  href: string;
}

export function resolveWikiLink(value: string | undefined): ResolvedLink | null {
  if (!value) return null;
  const match = value.match(/^\[\[([^\]|]+)(?:\|[^\]]*)?\]\]$/);
  if (!match) return null;
  const name = match[1];
  return {
    name,
    slug: slugify(name),
    href: `/components/${slugify(name)}`,
  };
}

export function resolveRobotLink(value: string | undefined): ResolvedLink | null {
  if (!value) return null;
  const match = value.match(/^\[\[([^\]|]+)(?:\|[^\]]*)?\]\]$/);
  if (!match) return null;
  const name = match[1];
  return {
    name,
    slug: slugify(name),
    href: `/robots/${slugify(name)}`,
  };
}

export function displayValue(value: string | undefined): string {
  if (!value) return "";
  const match = value.match(/^\[\[([^\]|]+)(?:\|([^\]]*))?\]\]$/);
  if (match) return match[2] || match[1];
  return value;
}
