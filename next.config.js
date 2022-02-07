//cannot run build while app is running
//cannot use import syntax
require('dotenv').config()

module.exports = {
  reactStrictMode: true,
  env: {
    mongodburl: process.env.MONGODB_ATLAS_CONNECTION,
  },
  images: {
    domains: ['imdb-api.com']
  }
}
