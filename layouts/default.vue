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