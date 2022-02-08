//cannot run build while app is running
//cannot use import syntax for dotenv
// already require dotenv don't import in pages 
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.MONGODB_ATLAS_CONNECTION,
    IMDB_KEY_1: process.env.IMDB_KEY_1
  },
  images: {
    domains: ['imdb-api.com']
  },
}
