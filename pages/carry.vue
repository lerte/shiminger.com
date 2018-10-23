<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <video width="100%" controls loop poster="http://cdn.shiminger.com/%E5%A4%9C%E7%9A%84%E9%92%A2%E7%90%B4%E6%9B%B2%EF%BC%88%E4%BA%94%EF%BC%89.mp4?vframe/jpg/offset/8/w/1920/h/1080" src="http://cdn.shiminger.com/%E5%A4%9C%E7%9A%84%E9%92%A2%E7%90%B4%E6%9B%B2%EF%BC%88%E4%BA%94%EF%BC%89.mp4">
          <source type="video/mp4 /">Your browser does not support the video tag!
        </video>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Carry',
  head() {
    return { title: 'Carry' }
  }
}
</script>
