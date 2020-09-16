module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-nprogress/gatsby-browser.js'),
      options: {"plugins":[],"color":"#d27c90","showSpinner":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Elas@Computação UFCG","short_name":"Elas@Computação UFCG","start_url":"/","background_color":"#f7f0eb","theme_color":"#d27c90","display":"standalone","icon":"src/assets/logos/elas_vertical.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"9f5231c01f5a0a905ad0e331e58ee548"},
    }]
