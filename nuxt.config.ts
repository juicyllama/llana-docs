export default defineNuxtConfig({
	ssr: true,
	extends: ['@nuxt/ui-pro'],

	modules: [
		'@nuxt/content',
		'@nuxt/ui',
		'@nuxtjs/fontaine',
		'@nuxtjs/google-fonts',
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
	],

	css: [
		'@/assets/css/main.css',
	],

	hooks: {
		'components:extend': (components) => {
			const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName))

			globals.forEach((c) => c.global = true)
		}
	},

	components: {
		dirs: ['~/components']
	},

	colorMode: {
		preference: 'dark',
		fallback: 'dark',
		storageKey: 'jl-docs-color-mode'
	},

	routeRules: {
		'/api/search.json': { prerender: true },
	},

	ui: {
		icons: ['simple-icons']
	},

	// Fonts
	fontMetrics: {
		fonts: ['DM Sans']
	},

	googleFonts: {
		display: 'swap',
		download: true,
		families: {
			Montserrat: {
				wght: [100, 200, 300, 400, 500, 600, 700, 800, 900],
				ital: []
			},
		}
	},

	sourcemap: {
		client: false,
		server: false
	},

	devtools: { enabled: true },
	typescript: { strict: false },

	content: {
		defaultLocale: 'en',
		markdown: {
			mdc: true,
		},
		highlight: {
			preload: ['sql'],
		}
	},

	nitro: {
		prerender: {
			failOnError: false
		}
	},

	compatibilityDate: '2024-08-02',

	devServer: {
		//host: 'local.llana.io',
		port: 3001
	}

})