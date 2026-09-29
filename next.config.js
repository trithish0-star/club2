const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/club2' : '',
  assetPrefix: isProd ? '/club2/' : '',
  images: {
    unoptimized: true,
  },
};
