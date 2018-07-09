<template>
  <v-content>
    <v-layout wrap>
      <v-flex sm4 xs12 d-flex pa-4>
        <v-select
          :items="keyMaps"
          label="C"
          solo>
        </v-select>
      </v-flex>
      <v-flex sm4 xs12 d-flex pa-4>
        <v-select
          :items="keyMaps"
          label="E"
          solo>
        </v-select>
      </v-flex>
      <v-flex sm4 xs12 d-flex pa-4>
        <v-select
          :items="keyMaps"
          label="G"
          solo>
        </v-select>
      </v-flex>
    </v-layout>
    <v-layout text-xs-center>
      <piano></piano>
    </v-layout>
  </v-content>
</template>

<script>
import piano from '~/components/piano'
export default {
  components: {
    piano
  },
  data: ()=> ({
    keyMaps: [
      'C', '#C', 
      'bD', 'D', '#D', 
      'bE', 'E', 
      'F', '#F', 
      'bG', 'G', '#G', 
      'bA', 'A', '#A', 
      'bB', 'B'
    ]
  })
}
</script>
