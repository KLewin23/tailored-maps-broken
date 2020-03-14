module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['@babel/preset-env', 'expo', '@babel/preset-react'],
  }
};
