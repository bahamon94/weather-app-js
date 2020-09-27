export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'weather-app-js',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    '@nuxtjs/fontawesome',
    //env Varibles de entorno
    '@nuxtjs/dotenv',
  ],
  fontawesome:{
    component: 'fa',
    icons:{
      solid : true,
      brands: true
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxt/http',
  ],
  http: {
    // proxyHeaders: false
    https : true,
    baseURL : 'https://api.openweathermap.org/data/2.5/'

  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
