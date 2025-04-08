const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export', // ensures static export
  basePath: isProd ? '/your-repo-name' : '',
  assetPrefix: isProd ? '/your-repo-name/' : '',
};
