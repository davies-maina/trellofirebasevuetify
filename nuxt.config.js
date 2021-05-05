export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'trellofirebase',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/styles.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  router:{
    middleware:['auth']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAIMQ1iPQ8Di-jARxaX2qc7r26dTxfzQPA",
          authDomain: "trelloclone-a821a.firebaseapp.com",
          projectId: "trelloclone-a821a",
          storageBucket: "trelloclone-a821a.appspot.com",
          messagingSenderId: "957689231592",
          appId: "1:957689231592:web:1db48403f8e3810a7ff15d"
        },
        services: {
          auth: {
            persistence: 'local', // default
            initialize: {
              onAuthStateChangedAction: 'onAuthStateChangedAction',
              subscribeManually: false
            },
            ssr: false,
          },
          firestore: true,
          storage: true
        }
      }
    ]
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
