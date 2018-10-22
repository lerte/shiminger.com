<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex>
        <p>md5: {{md5}}</p>
        <p>sha1: {{sha1}}</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import crypto from 'crypto'
export default {
  name: 'Crypto',
  head() {
    return { title: 'Icons' }
  },
  computed: {
    md5(){
      let md5 = crypto.createHash('md5')
      return md5.update(this.$store.state.search_input).digest('hex')
    },
    sha1(){
      let sha1 = crypto.createHash('sha1')
      return sha1.update(this.$store.state.search_input).digest('hex')
    }
  }
}
</script>
