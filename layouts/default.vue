<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <v-list-tile @click="go('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('/guitar-chord')">
          <v-list-tile-action>
            <v-icon>audiotrack</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>吉他和弦</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go('/testing')">
          <v-list-tile-action>
            <v-icon>question_answer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>测试答题</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{menu[$route.path]}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <a href="https://github.com/nuxtify/shiminger.com" target="_blank">
        <v-btn icon>
          <svg viewBox="0 0 1032 1024" xmlns="http://www.w3.org/2000/svg" width="516" height="512"><defs><style type="text/css"/></defs><path d="M0 515.872c0 225.248 144.352 416.768 345.584 487.104 27.12 6.896 22.896-12.544 22.896-25.616v-89.424c-156.464 18.304-162.736-85.28-173.296-102.608-21.312-36.272-71.392-45.488-56.432-62.752 35.696-18.432 71.968 4.608 114 66.784 30.464 45.072 89.664 37.504 119.936 29.936 6.624-27.056 20.704-51.2 39.952-70.08-161.888-28.816-229.552-127.792-229.552-245.44 0-56.944 18.8-109.504 55.808-151.856-23.408-69.888 2.256-129.472 5.616-138.416 66.928-6.08 136.512 47.872 141.872 52.128 38.128-10.192 81.52-15.76 130.064-15.76 48.848 0 92.48 5.632 130.784 15.952 13.072-9.952 77.584-56.192 139.824-50.544 3.312 8.848 28.416 67.168 6.4 136.016 37.376 42.464 56.352 95.264 56.352 152.48 0 117.888-67.952 217.008-230.528 245.6 27.152 26.736 43.984 63.92 43.984 105.04v129.712c.864 10.336 0 20.736 17.36 20.736 204.112-68.752 351.12-261.712 351.12-489.008 0-284.896-230.96-515.856-515.872-515.856-284.912 0-515.872 230.96-515.872 515.872zm0 0" fill="#fff"/></svg>
        </v-btn>
      </a>
    </v-toolbar>
    <nuxt/>
    <v-footer color="primary" dark app>
      <v-layout row wrap>
        <v-flex xs12 text-xs-center text--white>
          <span>&copy; 2018</span>
          <a class="white--text" href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备16007833号-1</a>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data: ()=> ({
    drawer: null,
    menu: {
      '/': '首页',
      '/guitar-chord': '吉他和弦'
    }
  }),
  methods: {
    go(to){
      this.$router.push({path: `${to}`})
    }
  }
}
</script>