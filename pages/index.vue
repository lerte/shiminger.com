<template>
  <v-content>
    <v-card>
      <v-card-title>
        请选择左侧对应的菜单
      </v-card-title>
      <v-card-text>
        <img v-for="(screenshoot, index) in screenshoots" :key="index" :src="screenshoot" />
      </v-card-text>
    </v-card>
  </v-content>
</template>
<script>
  export default {
    data: ()=> ({
      screenshoots: [
        '//cdn.shiminger.com/IMG_2729.PNG',
        '//cdn.shiminger.com/IMG_2731.PNG',
        '//cdn.shiminger.com/IMG_2722.PNG',
        '//cdn.shiminger.com/IMG_2727.PNG',
        '//cdn.shiminger.com/IMG_2726.PNG',
        '//cdn.shiminger.com/IMG_2728.PNG',
        '//cdn.shiminger.com/IMG_2730.PNG',
        '//cdn.shiminger.com/IMG_2725.PNG',
        '//cdn.shiminger.com/IMG_2721.PNG',
        '//cdn.shiminger.com/IMG_2723.PNG',
        '//cdn.shiminger.com/IMG_2715.PNG',
        '//cdn.shiminger.com/IMG_2720.PNG',
        '//cdn.shiminger.com/IMG_2719.PNG'
      ]
    })
  }
</script>