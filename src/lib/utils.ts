export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
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
