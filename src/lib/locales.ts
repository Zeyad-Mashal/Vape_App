export const locales = ["ar", "en"] as const;
export type Locale = (typeof locales)[number]