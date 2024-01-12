const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) => {
    const isProduction = env === 'production';
    
    return {
        entry: './src/index.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js',
            publicPath: '/dist/'
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: "styles.css",
            }),
        ],
        mode: 'development',
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },{
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
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
            }]
        },
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            static: {
                directory: path.join(__dirname, 'public')
            },
            historyApiFallback: true
        }
    };
};
