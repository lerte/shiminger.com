<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-flex>
        <qrcode-vue :value="$store.state.search_input" :size="size" level="H"></qrcode-vue>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import QrcodeVue from 'qrcode.vue'
export default {
  head() {
    return { title: 'QR Code' }
  },
  components: {
    QrcodeVue
  },
  data: ()=>({
    size: 200
  })
}
</script>

