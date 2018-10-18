<template>
  <v-container fluid>
    <v-card>
      <v-card-title>
        <p class="title info--text">
          ⬆️ 请选择左侧对应的菜单<br/>
          ⬇️ 下面有一些界面的截图
        </p>
      </v-card-title>
      <v-card-text>
        <img class="img-reponsive" v-for="(screenshoot, index) in screenshoots" :key="index" :src="screenshoot" />
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    layout: 'testing',
    head() {
      return { title: 'Testing' }
    },
    data: ()=> ({
      screenshoots: [
        'http://cdn.shiminger.com/IMG_2719.PNG',
        'http://cdn.shiminger.com/IMG_2720.PNG',
        'http://cdn.shiminger.com/IMG_2721.PNG',
        'http://cdn.shiminger.com/IMG_2729.PNG?imageMogr2/crop/!750x480a0a0',
        'http://cdn.shiminger.com/IMG_2728.PNG',
        'http://cdn.shiminger.com/IMG_2727.PNG',
        'http://cdn.shiminger.com/IMG_2726.PNG',
        'http://cdn.shiminger.com/IMG_2722.PNG',
        'http://cdn.shiminger.com/IMG_2730.PNG',
        'http://cdn.shiminger.com/IMG_2723.PNG',
        'http://cdn.shiminger.com/IMG_2731.PNG',
        'http://cdn.shiminger.com/IMG_2725.PNG'
      ]
    })
  }
</script>
