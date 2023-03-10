
const path = require("path");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'script-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'exports-loader',
            options: {
              type: 'commonjs',
              exports: 'default'
            }
          }
        ]
      }
    ]
  }
};
