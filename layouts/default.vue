<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>首页</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/guitar-chord">
          <v-list-tile-action>
            <i class="icon">
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgba(0,0,0,0.54)"><path d="M720.279 223.856c2.259 6.374 4.274 17.965 4.274 28.941 0 0 37.562 3.553 42.928 0 5.366-3.542 17.922-15.928 17.922-43.459 0-27.562-12.567-39.917-17.922-43.469h-42.928c0 15.769-4.136 22.111-7.19 29.365h-21.666c3.468-67.457 5.896-117.544 5.896-127.799 0-31.592-25.812-30.128-25.812-30.128h-316.725s-25.823-1.029-25.823 30.128c0 10.255 2.429 60.331 5.907 127.799h-19.619c-3.044-7.254-7.179-13.585-7.179-29.365 0 0-37.562-3.553-42.928 0s-17.922 15.907-17.922 43.469c0 27.53 12.567 39.917 17.922 43.459 5.366 3.553 42.928 0 42.928 0 0-10.976 2.015-22.578 4.263-28.941h24.009c2.821 54.042 6.108 116.166 9.311 176.878h-16.968c-3.044-7.243-7.179-13.585-7.179-29.365 0 0-37.562-3.553-42.928 0s-17.912 15.928-17.912 43.469 12.556 39.906 17.912 43.459h42.928c0-10.965 2.015-22.567 4.263-28.941h21.39c3.595 68.306 6.925 132.773 9.152 179.265h-19.471c-3.044-7.254-7.179-13.595-7.179-29.375 0 0-37.562-3.553-42.928 0s-17.912 15.918-17.912 43.469c0 27.541 12.556 39.917 17.912 43.469h42.928c0-10.976 2.015-22.578 4.263-28.951h23.702c.912 20.383 1.442 34.635 1.442 40.341 0 87.776 43.024 110.142 43.024 190.177h222.076c0-80.035 43.035-102.39 43.035-190.177 0-5.705.53-19.958 1.442-40.341h25.77c2.248 6.384 4.263 17.975 4.263 28.951 0 0 37.562 3.553 42.928 0s17.922-15.928 17.922-43.469c0-27.551-12.567-39.917-17.922-43.469h-42.928c0 15.769-4.136 22.122-7.19 29.375h-21.517c2.227-46.502 5.557-110.959 9.152-179.265h23.447c2.248 6.374 4.263 17.965 4.263 28.941 0 0 37.562 3.553 42.928 0 5.355-3.553 17.912-15.918 17.912-43.459s-12.567-39.917-17.912-43.469c-5.366-3.553-42.928 0-42.928 0 0 15.769-4.136 22.122-7.179 29.365h-19.025c3.203-60.713 6.501-122.836 9.311-176.878h26.067zm-102.231-42.791a28.421 28.421 0 0 1 0 56.842 28.453 28.453 0 0 1-28.453-28.389 28.474 28.474 0 0 1 28.453-28.453zm-237.082 26.576a28.453 28.453 0 0 1 28.442-28.432c15.674 0 26.597 14.592 26.597 30.277a28.453 28.453 0 0 1-28.453 28.41c-15.706 0-26.586-14.539-26.586-30.256zm40.341 447.642a28.442 28.442 0 1 1 28.453-28.453 28.474 28.474 0 0 1-28.453 28.453zm-2.142-212.203a28.442 28.442 0 1 1 0-56.863 28.442 28.442 0 0 1 0 56.863zm161.597-26.745a28.453 28.453 0 1 1 28.442 28.421 28.463 28.463 0 0 1-28.442-28.421zm38.4 238.949a28.474 28.474 0 0 1-28.453-28.432 28.442 28.442 0 1 1 28.453 28.432zm-212.776 240.995h222.055v95.465h-222.055z"/></svg>
            </i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>吉他和弦</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/icons">
          <v-list-tile-action>
            <v-icon>mood</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>字体图标</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/qr-code">
          <v-list-tile-action>
            <i class="fa fa-2x fa-qrcode"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>二维码</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/crypto">
          <v-list-tile-action>
            <i class="fa fa-2x fa-lock"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>加密</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/guitar-score">
          <v-list-tile-action>
            <v-icon>library_music</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>吉他谱</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/carry">
          <v-list-tile-action>
            <i class="fa fa-2x fa-music"></i>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>夜的钢琴曲</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark fixed app clipped-left>
      <v-toolbar-title>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        {{menu[$route.path]}}
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        hide-details
        append-icon="search"
        v-model="input"
      />
      <v-spacer></v-spacer>
      <a title="Crephy Cosmetics" href="https://crephy.com" target="_blank">
        <v-btn icon>
          <i class="fa fa-2x fa-shopping-cart"></i>
        </v-btn>
      </a>
    </v-toolbar>
    <v-content>
      <v-slide-y-transition mode="out-in">
        <nuxt/>
      </v-slide-y-transition>
    </v-content>
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
  data: () => ({
    drawer: null,
    input: null,
    menu: {
      "/": "首页",
      "/guitar-chord": "吉他和弦",
      "/piano-chord": "钢琴和弦",
      "/icons": "字体图标",
      "/qr-code": "二维码",
      "/crypto": "加密",
      "/guitar-score": "吉他谱",
      "/carry": "夜的钢琴曲",
    },
  }),
  watch: {
    input(val) {
      this.$store.commit("SET_SEARCH_INPUT", val);
    },
  },
};
</script>
