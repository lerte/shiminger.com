<template>
  <v-content>
    <v-container>
    <v-layout>
      <v-flex xs3>
        <div class="qr-wrapper" v-html="qrImage"></div>
      </v-flex>
      <v-flex xs9 d-flex align-center>
        <v-text-field
          label="请输入文字内容"
          v-model="content"
          autofocus
          solo>
        </v-text-field>
      </v-flex>
    </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  head: {
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.0/qrcode.min.js'
      }
    ]
  },
  data: ()=>({
    content: '',
    qrImage: ''
  }),
  watch: {
    content: function(val){
      this.makeQR()
      this.$router.push({path: `/qr-code/${val}`})
    }
  },
  mounted(){
    if(typeof(this.$route.params.slug) != 'undefined'){
      this.content = this.$route.params.slug
    }
    this.makeQR()
  },
  methods: {
    makeQR(){
      const typeNumber = 4
      const errorCorrectionLevel = 'L'
      const qr = qrcode(typeNumber, errorCorrectionLevel)
      qr.addData(this.content)
      qr.make()
      this.qrImage = qr.createImgTag()
    }
  }
}
</script>

