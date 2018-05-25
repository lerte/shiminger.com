<template>
  <v-content>
    <ip :ip="ip"></ip>
  </v-content>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from "nuxt-property-decorator"
import { State } from "vuex-class"
import ip from "~/components/ip.vue"
@Component({
  components: {
    ip
  }
})
export default class index extends Vue {
  @State ip
}
</script>