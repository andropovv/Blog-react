type Mods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = []
): string {
  return [
    cls,
    Object.entries(mods)
      .filter(([key, value]) => Boolean(value))
      .map(([key, value]) => key),
    ...additional.filter(Boolean),
  ].join(" ");
}
