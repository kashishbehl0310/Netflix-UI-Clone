const webpack = require('webpack');
const path = require('path');
const paths = require('./config/paths');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
    const isProduction = env === 'production';
    const CssExtract = new ExtractTextPlugin('styles.css')
    console.log('env', env)
    return {
        entry: './src/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },  
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.s?css$/,
                    use: CssExtract.extract({
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: {
                                    sourceMap: true
                                }
                            }
                        ]
                    })
                },
                  {
                    test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                    use: [
                        {
                            loader: 'url-loader'
                        },
                    ]
                }
            ]
        },
        plugins: [
            CssExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            historyApiFallback: true
        }
    }
}