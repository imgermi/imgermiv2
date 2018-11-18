const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s',
    meta: [ // Each object in this array is its own meta tag
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial scale=1' },
      { name: 'msapplication-TileColor', content: '#c8b382' },
      { name: 'theme-color', content: '#c8b382' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', color: '#c8b382', href: '/safari-pinned-tab.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,700+Lora:700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    'css/bootstrap.css',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
