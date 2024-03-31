function config(mode) {
	return {
		mode: mode,
		entry: {
			global: './src/js/global.js',
			index: './src/js/index.js'
		},
		output: {
			filename: '[name].js',
		},
		module: {
			rules: [{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			}, ],
		},
	}
}

module.exports = config;