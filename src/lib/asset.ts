/** Prepend the deploy base path to any /public asset path. */
export const asset = (path: string): string => {
  const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/+$/, "");
  const normalizedPath = path.replace(/^\/+/, "");

  return basePath ? `${basePath}/${normalizedPath}` : `/${normalizedPath}`;
};
