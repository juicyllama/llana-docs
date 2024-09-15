import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
	'content/**/*.md',
	`/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `/pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/utils/**/*.{js,ts}`,
    `/App.{js,ts,vue}`,
    `/app.{js,ts,vue}`,
    `/Error.{js,ts,vue}`,
    `/error.{js,ts,vue}`,
    `/app.config.{js,ts}`,
	'nuxt.config.ts',
	'app.config.ts',
	'app.vue',
	'nuxt.schema.ts',
  ],
  theme: {
    extend: {
      colors: {
        yellow: {
          50: '#f9e4a4',
          100: '#f8de90',
          200: '#f7d87b',
          300: '#f6d263',
          400: '#f4cc46',
          500: '#f3c614',
          600: '#d3ac10',
          700: '#b4920c',
          800: '#977a08',
          900: '#7a6205',
          950: '#5e4b03'
        }
      }
    }
  }
}
