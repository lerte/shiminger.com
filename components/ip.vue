<template>
  <v-card>
    Your public ip is: <span v-text="ip"></span>
  </v-card>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue
} from "nuxt-property-decorator"
@Component({})
export default class ip extends Vue {
  @Prop() ip
}
</script>