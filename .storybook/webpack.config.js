const path = require('path');

module.exports = {
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, '../src/common')
    },
  },
}