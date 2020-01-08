path = require('path');
module.exports = {
  pwa:{
    name: 'Git Search',
    themeColor: '#1fbbfe',
    msTileColor: '#1fbbfe',
    workboxOptions: {
      exclude: [
        /\.png/,
        /\.html/,
        'manifest.json'
      ]
    }
  },
  css: {
    loaderOptions: {
      less: {
        globalVars: {
          blue: "#1fbbfe",
          silver: "#fafafa",
          lightSilver: "#989898",
          yellow: "#ddca21",
          black: "#000",
          border: "#e6e6e6",
          radius: "5px",
          mob: "800px"
        }
      }
    }
  }
};