<template>
  <v-container fluid fill-height grid-list-md>
    <v-layout align-center justify-center wrap>
      <v-flex xs6 sm4 md3 lg2 xl1 v-for="(item, index) in items" :key="index">
        <v-hover>
          <v-card
            slot-scope="{ hover }" 
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            @click.native="currentItem=items[index];dialog=true"
          >
            <v-img :src="item.poster" width="130" height="130"></v-img>
            <h3 class="headline my-2 text-xs-center">{{item.title}}</h3>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
    <v-dialog v-model="dialog">
      <v-layout align-center justify-center fill-height>
        <v-flex xs4 v-for="(item, index) in currentItem.notes" :key="index">
          <img :src="item">
        </v-flex>
      </v-layout>
    </v-dialog>
  </v-container>
</template>

<style lang="stylus">
.v-card{
  cursor: pointer;
  padding-top: 8px;
  .v-image{
    margin: 0 auto;
    &__image{
      border-radius: 50%;
    }
  }
}
.v-dialog{
  background-color: #fff;
  img{
    width: 100%;
  }
}

</style>

<script>
export default {
  head() {
    return { title: "Guitar" };
  },
  data: () => ({
    dialog: false,
    currentItem: {},
    items: [
      {
        title: "Yellow",
        poster: require("@/assets/posters/Yellow.jpg"),
        notes: [
          require("@/assets/notes/Yellow1.png"),
          require("@/assets/notes/Yellow2.png"),
          require("@/assets/notes/Yellow3.png"),
          require("@/assets/notes/Yellow4.png"),
        ],
      },
      {
        title: "晴天",
        poster: require("@/assets/posters/晴天.jpg"),
        notes: [
          require("@/assets/notes/晴天1.jpg"),
          require("@/assets/notes/晴天2.jpg"),
          require("@/assets/notes/晴天3.jpg"),
          require("@/assets/notes/晴天4.jpg"),
        ],
      },
      {
        title: "情人",
        poster: require("@/assets/posters/情人.png"),
        notes: [
          require("@/assets/notes/情人1.png"),
          require("@/assets/notes/情人2.png"),
          require("@/assets/notes/情人3.png"),
          require("@/assets/notes/情人4.png"),
        ],
      },
      {
        title: "两天",
        poster: require("@/assets/posters/珍藏许巍作品全集.png"),
        notes: [
          require("@/assets/notes/两天1.gif"),
          require("@/assets/notes/两天2.gif"),
          require("@/assets/notes/两天3.gif"),
        ],
      },
      {
        title: "礼物",
        poster: require("@/assets/posters/礼物.jpg"),
        notes: [
          require("@/assets/notes/礼物1.png"),
          require("@/assets/notes/礼物2.png"),
          require("@/assets/notes/礼物3.png"),
        ],
      },
      {
        title: "青鸟Ⅱ",
        poster: require("@/assets/posters/珍藏许巍作品全集.png"),
        notes: [
          require("@/assets/notes/青鸟1.gif"),
          require("@/assets/notes/青鸟2.gif"),
        ],
      },
      {
        title: "无题",
        poster: require("@/assets/posters/无题.jpg"),
        notes: [
          require("@/assets/notes/无题1.png"),
          require("@/assets/notes/无题2.png"),
          require("@/assets/notes/无题3.png"),
          require("@/assets/notes/无题4.png"),
          require("@/assets/notes/无题5.png"),
        ],
      },
      {
        title: "梦一场",
        poster: require("@/assets/posters/梦一场.jpg"),
        notes: [
          require("@/assets/notes/梦一场1.png"),
          require("@/assets/notes/梦一场2.png"),
          require("@/assets/notes/梦一场3.png"),
        ],
      },
      {
        title: "理想三旬",
        poster: require("@/assets/posters/理想三旬.jpg"),
        notes: [
          require("@/assets/notes/理想三旬1.png"),
          require("@/assets/notes/理想三旬2.png"),
        ],
      },
      {
        title: "和你在一起",
        poster: require("@/assets/posters/和你在一起.png"),
        notes: [
          require("@/assets/notes/和你在一起1.png"),
          require("@/assets/notes/和你在一起2.png"),
          require("@/assets/notes/和你在一起3.png"),
          require("@/assets/notes/和你在一起4.png"),
        ],
      },
      {
        title: "一万次悲伤",
        poster: require("@/assets/posters/世界.jpg"),
        notes: [
          require("@/assets/notes/一万次悲伤1.png"),
          require("@/assets/notes/一万次悲伤2.png"),
          require("@/assets/notes/一万次悲伤3.png"),
        ],
      },
      {
        title: "夜空中最亮的星",
        poster: require("@/assets/posters/世界.jpg"),
        notes: [
          require("@/assets/notes/夜空中最亮的星1.png"),
          require("@/assets/notes/夜空中最亮的星2.png"),
          require("@/assets/notes/夜空中最亮的星3.png"),
        ],
      },
      {
        title: "他来听我的演唱会",
        poster: require("@/assets/posters/他来听我的演唱会.png"),
        notes: [
          require("@/assets/notes/他来听我的演唱会1.jpg"),
          require("@/assets/notes/他来听我的演唱会2.jpg"),
          require("@/assets/notes/他来听我的演唱会3.jpg"),
        ],
      },
      {
        title: "成都",
        poster: require("@/assets/posters/成都.jpg"),
        notes: [
          require("@/assets/notes/成都1.png"),
          require("@/assets/notes/成都2.png"),
          require("@/assets/notes/成都3.png"),
        ],
      },
      {
        title: "未给姐姐递出的信",
        poster: require("@/assets/posters/未给姐姐递出的信.jpg"),
        notes: [
          require("@/assets/notes/未给姐姐递出的信1.png"),
          require("@/assets/notes/未给姐姐递出的信2.png"),
          require("@/assets/notes/未给姐姐递出的信3.png"),
        ],
      },
      {
        title: "玫瑰",
        poster: require("@/assets/posters/玫瑰.jpg"),
        notes: [
          require("@/assets/notes/玫瑰1.png"),
          require("@/assets/notes/玫瑰2.png"),
          require("@/assets/notes/玫瑰3.png"),
        ],
      },
      {
        title: "演员",
        poster: require("@/assets/posters/演员.jpg"),
        notes: [
          require("@/assets/notes/演员1.gif"),
          require("@/assets/notes/演员2.gif"),
          require("@/assets/notes/演员3.gif"),
        ],
      },
      {
        title: "七月上",
        poster: require("@/assets/posters/七月上.jpg"),
        notes: [
          require("@/assets/notes/七月上1.png"),
          require("@/assets/notes/七月上2.png"),
        ],
      },
      {
        title: "安河桥",
        poster: require("@/assets/posters/安河桥.jpg"),
        notes: [
          require("@/assets/notes/安河桥1.png"),
          require("@/assets/notes/安河桥2.png"),
          require("@/assets/notes/安河桥3.png"),
        ],
      },
    ],
  }),
};
</script>
