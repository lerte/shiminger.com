<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app>
      <v-list dense>
        <nuxt-link to="/">
        <v-list-tile>
            <v-list-tile-action>
              <v-icon>home</v-icon>
            </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        </nuxt-link>
        <v-list-tile @click="go(1)">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>谭佩 - 简介、入口、主模块、首页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go(2)">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>周萤 - 商城、banner、统计</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go(3)">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>辛娟 - 求购、供应、商机</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go(4)">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>刘帅 - 店铺列表、品牌墙</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go(5)">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>雪滢 - 买家中心</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go(6)">
          <v-list-tile-action>
            <v-icon>face</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>清秀 - 卖家中心</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="go(7)">
          <v-list-tile-action>
            <v-icon>person</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>石明 - 我、注册、全局搜索</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>测试答题</v-toolbar-title>
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
    drawer: null
  }),
  methods: {
    go(to){
      this.$router.push({path: `/testing/${to}`})
    }
  }
}
</script>