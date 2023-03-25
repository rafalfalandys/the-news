// build query from article titile to get proper modal window
export const buildQuery = (string: string) =>
  string.trim().toLowerCase().replace(/\W/g, "-").slice(0, 20).trim();
