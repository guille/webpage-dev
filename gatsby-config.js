const config = require('./config');

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
