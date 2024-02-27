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
]

export default projects
