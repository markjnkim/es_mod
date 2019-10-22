const config = {
  entry: {
    app: './assets/js/script.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  mode: "development"
};

module.exports = config;
