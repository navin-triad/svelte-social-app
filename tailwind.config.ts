import type { Config } from 'tailwindcss';
 
const generateSizeClass = (upToSize: number, startAt: number = 80): Record<number, string> => {
  const classes: Record<number, string> = {};
  for (let i = startAt; i < upToSize / 4; i += 4) {
    classes[i] = `${(i * 4) / 16}rem`;
  }
  return classes;
};
 
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      xxs: '300px',
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      width: generateSizeClass(1024),
      minHeight: generateSizeClass(1024, 0),
      maxHeight: generateSizeClass(1024, 0),
      maxWidth: generateSizeClass(1024, 0),
      minWidth: generateSizeClass(1024, 0),
      borderWidth: {
        1: '1px',
      },
    },
  },
} satisfies Config;