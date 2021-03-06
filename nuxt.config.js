module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Chaostreff Flensburg e.V.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hackerspace & Makerplace' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Lato:300,400,700,900' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif:400,400i,700,700i' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: '~assets/css/grid.scss', lang: 'scss' }
  ],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {}
  },
  generate: {
    routes: [
      '/event/weekendhack0x3/',
      '/wiki/impressum',
      '/wiki/wir'
    ]
  }
}
