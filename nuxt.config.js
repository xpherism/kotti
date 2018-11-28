const config = {
	srcDir: './www/',
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'Kotti Design System',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: `Kotti helps to unify our design language and provides the documentation for further product
design decisions. The Kotti design system has two main parts: foundation and components.`,
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
		script: [
			{
				src: `https://jira.3yourmind.com/s/a4b15870ba2faaa8526e29ec1fc54fc2-T/-s8v1l3/79002/b10b26119affed4ed7a2e8f9c8556e37/
			2.0.27/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/
			com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-UK&collectorId=e069af0f`,
			},
		],
	},
	/*
	 ** Customize the progress bar color
	 */
	css: [
		'../packages/kotti-style/index.scss',
		'@/assets/css/main.scss',
		'@3yourmind/yoco',
	],
	modules: ['@nuxtjs/markdownit', '@nuxtjs/axios'],
	loading: {
		color: '#2C64CC',
	},
	plugins: ['~/plugins/vue-clipboard2'],
	/*
	 ** Build configuration
	 */
	build: {
		extend(config, ctx) {
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					// loader: 'eslint-loader',
					exclude: /(node_modules)/,
				})
			}
		},
	},
}

if (process.env.DEPLOY_ENV === 'GH_PAGES') {
	config.generate = {
		dir: 'gh-pages',
	}
	config.router = {
		base: '/kotti/',
	}
}

module.exports = config
