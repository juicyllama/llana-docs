import * as pkg from './package.json'

const links = [
	{
		'aria-label': 'Email',
		to: 'mailto:studio@juicyllama.com',
		icon: 'i-simple-icons-gmail',
		target: '_blank'
	},
	{
		'aria-label': 'Github',
		to: 'https://github.com/juicyllama',
		icon: 'i-simple-icons-github',
		target: '_blank'
	},
	{
		'aria-label': 'LinkedIn',
		to: 'https://www.linkedin.com/company/juicyllama/',
		icon: 'i-simple-icons-linkedin',
		target: '_blank'
	},
	{
		'aria-label': 'Postman',
		to: 'https://www.postman.com/juicyllama/',
		icon: 'i-simple-icons-postman',
		target: '_blank'
	},{
		'aria-label': 'YouTube',
		to: 'https://www.youtube.com/@juicyllama-studio',
		icon: 'i-simple-icons-youtube',
		target: '_blank'
	}
  ]

export default defineAppConfig({
	ui: {
	  primary: 'yellow',
	  gray: 'slate',
	  footer: {
		bottom: {
		  left: 'text-sm text-gray-500 dark:text-gray-400',
		  wrapper: 'border-t border-gray-200 dark:border-gray-800'
		}
	  }
	},
	seo: {
	  siteName: 'JuicyLlama :: Workflow Automation Experts',
	},
	header: {
	  logo: {
		alt: '',
		light: '',
		dark: ''
	  },
	  search: true,
	  colorMode: false,
	  links: links
	},
	footer: {
	  credits: 'Copyright © '+ new Date().getFullYear(),
	  colorMode: false,
	  links: links,
	  PACKAGE_VERSION: pkg.version,
	}
  })

