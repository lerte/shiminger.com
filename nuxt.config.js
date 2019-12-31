export default {
  head: {
    titleTemplate: "SHIMINGER - %s | Full Stack Developer",
    htmlAttrs: {
      lang: 'zh-CN'
    },
    link: [
      { rel: 'stylesheet', href: '//fonts.loli.net/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'stylesheet', href: '//cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css'}
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  generate: {
    dir: 'public'
  },
  css: ["~/assets/styles/main.styl"],
  manifest: {
    name: 'SHIMINGER - Full Stack Developer',
    short_name: 'SHIMINGER',
    description: 'A Full Stack Developer',
    lang: 'zh-CN'
  },
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/vuetify'
  ],
  vuetify: {
    materialIcons: false,
    theme: {
      primary: '#3f51b5',
      secondary: '#757de8',
      accent: '#ff4081',
      error: '#F44336',
      warning: '#ff9800',
      info: '#2196F3',
      success: '#4CAF50'
    }
  },
  extensions: ['js', 'ts'],
  build: {
    extractCSS: true
  }
}
