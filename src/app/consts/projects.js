/**
 * @type {import("../../types/Project").Project[]}
 */
const projects = [
	{
		id: 'portfolio',
		links: {
			live: 'quelaan1.github.io',
			github: 'quelaan1/quelaan1.github.io',
		},
		techs: ['js'],
		hasImage: true,
	},
	{
		id: 'logfire',
		links: {
			live: 'logfire.ai',
			github: '',
		},
		techs: [
			'next.js',
			'ts',
			'redux.js',
			'python',
			'postgresql',
			'starrocks',
			'clickhouse',
			'tailwindcss',
		],
		hasImage: true,
	},
	{
		id: 'payup',
		links: {
			live: '',
			github: '',
		},
		techs: ['react native', 'ts', 'python'],
		hasImage: true,
	},
	{
		id: 'mybike',
		links: {
			live: 'quelaan1.github.io/layout_miami',
			github: 'quelaan1/layout_miami',
		},
		techs: ['js', 'html', 'sass'],
		hasImage: true,
		isSmall: true,
	},
	{
		id: 'realestate',
		links: {
			live: 'quelaan1.github.io/real_estate_search_filter/#/rent',
			github: 'quelaan1/real_estate_search_filter',
		},
		techs: ['ts', 'css', 'html'],
		hasImage: true,
		isSmall: true,
	},
	{
		id: 'crazybaby',
		links: {
			live: 'quelaan1.github.io/Kickstarter/',
			github: 'quelaan1/Kickstarter',
		},
		techs: ['js', 'sass', 'html'],
		hasImage: true,
		isSmall: true,
	},
	{
		id: 'landbrokers',
		links: {
			live: 'land-brokers.vercel.app/?category=Countryside',
			github: 'quelaan1/land-brokers',
		},
		techs: ["next.js",'ts', 'tailwindcss'],
		hasImage: true,
		isSmall: true,
	},
]

export default projects
