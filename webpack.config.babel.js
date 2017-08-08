import path from 'path';
import webpack from 'webpack';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// const env = process.env.NODE_ENV || 'production';
const env = 'development';

let plugins = [
	new CopyWebpackPlugin([{ from: './public' }]),
	new webpack.DefinePlugin({
		'process.env': {
			NODE_ENV: JSON.stringify(env)
		}
	})
];

const loaderOptionsConfig = {
	options: {
		sassLoader: {
			includePaths: [
				'./node_modules'
			]
		}
	}
};

const devConfig = {};
if (env === 'production'){
	loaderOptionsConfig.minimize = true;
	plugins.push(
    new webpack.optimize.UglifyJsPlugin({
	compress: {
		warnings: false,
		screw_ie8: true,
		conditionals: true,
		unused: true,
		comparisons: true,
		sequences: true,
		dead_code: true,
		evaluate: true,
		if_return: true,
		join_vars: true
	},
	mangle: {
		screw_ie8: true
	},
	output: {
		comments: false,
		screw_ie8: true
	}
})
  );
}
else {
	plugins = plugins.concat([
		new webpack.DefinePlugin({
			'process.env': '"development"'
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin(),      // It's useful for debug purpose
		new webpack.NoEmitOnErrorsPlugin()
	]);
	devConfig.devtool = 'cheap-module-eval-source-map';
	devConfig.entry = [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:3000/',
		'webpack/hot/only-dev-server', // This will not reload the page if there is module that needs to reload the page
		'webpack/hot/dev-server', // This will reload the page if there is module that needs to reload the page
		'./src/js/index.js'
	];
	devConfig.devServer = {
		compress: true,
		clientLogLevel: 'none',
		contentBase: path.resolve('./dist'),
		publicPath: '/',
		quiet: true,
		hot: true,
		watchOptions: {
			ignored: /node_modules/
		},
		historyApiFallback: true,
		proxy: {
			'/api/*': 'http://localhost:8102'
		}
	};
}

plugins.push(new webpack.LoaderOptionsPlugin(loaderOptionsConfig));
// plugins.push(new ExtractTextPlugin({
// filename: '[contenthash].css',
// disable: false,
// allChunks: true }));
plugins.push(new HtmlWebpackPlugin({
	template: 'public/index.html'
}));

export default Object.assign({
	entry: './src/js/root.js',
	output: {
		path: path.resolve('./dist'),
		filename: 'index.js',
		publicPath: '/'
	},
	resolve: {
		modules: [
			path.resolve(__dirname, 'src', 'js'),
			'node_modules'
		],
		extensions: ['.js', '.scss', '.css', '.json', 'woff2'],
		alias: {
			'css-colors': path.resolve(__dirname, 'src', 'scss', 'themes', 'default', 'colors.scss'),
			'css-base': path.resolve(__dirname, 'src', 'scss', 'themes', 'default', 'base.scss'),
			config: path.resolve(__dirname, 'config', 'config.js'),
			homepage: path.resolve(__dirname, 'src', 'js', 'routes', 'HomePage'),
			images: path.resolve(__dirname, 'src', 'images'),
			server: path.resolve(__dirname, 'server'),
			scss: path.resolve(__dirname, 'src', 'scss'),
			themes: path.resolve(__dirname, 'src', 'scss', 'themes'),
			default: path.resolve(__dirname, 'src', 'scss', 'themes', 'default'),
			api: path.resolve(__dirname, 'server', 'router', 'api', 'routes')
		}
	},
	plugins,
	node: {
		fs: 'empty',
		net: 'empty',
		tls: 'empty'
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				loaders: ['react-hot-loader/webpack', 'babel-loader']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader?modules',
				include: /flexboxgrid/
			},
			{
				test: /\.scss$/,
				use: [
          { loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							minimize: true,
							sourceMap: false,
							url: true
						}
					},
					{ loader: 'sass-loader',
						options: {
							sourceMap: true,
							modules: true,
							outputStyle: 'compressed',
							includePaths: [
								'./node_modules',
								'./src/scss/',
								'./src/src/'
							]
						}
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=[name].[ext]',
					'image-webpack-loader?bypassOnDebug'
				]
			},
			{
				test: /\.(woff|eot|ttf|woff2)$/i,
				loaders: [
					'file-loader?hash=sha512&digest=hex&name=[name].[ext]'
				]
			}
		]
	}
}, devConfig);
