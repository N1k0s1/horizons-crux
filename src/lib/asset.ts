/** Prepend the deploy base path to any /public asset path. */
export const asset = (path: string): string =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
