// 基础公共配置文件
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  // Webpack 在启动后会从配置的入口模块出发，找到所有依赖的模块，resolve 配置 Webpack 如何寻找模块所对应的文件。我们配置了 extensions，表示在导入语句中没带文件后缀时，Webpack 会自动带上后缀去尝试访问文件是否存在。
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    // 别名
    alias: {
      '@assets': path.join(__dirname, '../', 'assets'),
      '@src': path.join(__dirname, '../', 'app/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.(jpg|png|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'images/',
              // 图片 icon 并未正确显示，background: url([object Module])
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
};
