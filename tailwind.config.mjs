/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    // IconLink color variants - explicit inclusion for production builds
    // Primary colors
    'bg-primary-100', 'bg-primary-200', 'ring-primary-300', 'hover:bg-primary-200', 'hover:ring-primary', 'text-primary', 'group-hover:text-primary-content',
    // Secondary colors
    'bg-secondary-100', 'bg-secondary-200', 'ring-secondary-300', 'hover:bg-secondary-200', 'hover:ring-secondary', 'text-secondary', 'group-hover:text-secondary-content',
    // Accent colors
    'bg-accent-100', 'bg-accent-200', 'ring-accent-300', 'hover:bg-accent-200', 'hover:ring-accent', 'text-accent', 'group-hover:text-accent-content',
    // Neutral colors
    'bg-neutral-100', 'bg-neutral-200', 'ring-neutral-300', 'hover:bg-neutral-200', 'hover:ring-neutral', 'text-neutral', 'group-hover:text-neutral-content',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
          "primary-100": "oklch(from var(--primary-100) l c h / <alpha-value>)",
          "primary-200": "oklch(from var(--primary-200) l c h / <alpha-value>)",
          "primary-300": "oklch(from var(--primary-300) l c h / <alpha-value>)",
          "primary-content": "oklch(from var(--primary-content) l c h / <alpha-value>)",

          "secondary-100": "oklch(from var(--secondary-100) l c h / <alpha-value>)",
          "secondary-200": "oklch(from var(--secondary-200) l c h / <alpha-value>)",
          "secondary-300": "oklch(from var(--secondary-300) l c h / <alpha-value>)",
          "secondary-content": "oklch(from var(--secondary-content) l c h / <alpha-value>)",

          "accent-100": "oklch(from var(--accent-100) l c h / <alpha-value>)",
          "accent-200": "oklch(from var(--accent-200) l c h / <alpha-value>)",
          "accent-300": "oklch(from var(--accent-300) l c h / <alpha-value>)",
          "accent-content": "oklch(from var(--accent-content) l c h / <alpha-value>)",

          "neutral-100": "oklch(from var(--neutral-100) l c h / <alpha-value>)",
          "neutral-200": "oklch(from var(--neutral-200) l c h / <alpha-value>)",
          "neutral-300": "oklch(from var(--neutral-300) l c h / <alpha-value>)",
          "neutral-content": "oklch(from var(--neutral-content) l c h / <alpha-value>)",

          "base-100": "oklch(from var(--base-100) l c h / <alpha-value>)",
          "base-200": "oklch(from var(--base-200) l c h / <alpha-value>)",
          "base-300": "oklch(from var(--base-300) l c h / <alpha-value>)",
          "base-content": "oklch(from var(--base-content) l c h / <alpha-value>)",
      }
    }
  },
};
