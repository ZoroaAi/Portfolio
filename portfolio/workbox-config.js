module.exports = {
	globDirectory: 'build/',
	globPatterns: [
		'**/*.{json,png,jpg,html,txt,bin,gltf,glb,js,css,svg,docx,ttf,woff2,eot,woff}'
	],
	swDest: 'src/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};