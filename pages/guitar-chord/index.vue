<template>
  <v-container fluid class="chord">
    <ChordSelect ref="chordSelect" :selectFinish="selectFinish" />
    <ChordDraw ref="chordDraw" :hideLoading="hideLoading" />
  </v-container>
</template>

<style lang="stylus">
.chord
  text-align center
  &-svg
    width 200px
    height 220px
    @media screen and (max-width 700px)
      width 140px
      height 155px
    @media screen and (max-width 320px)
      width 120px
      height 135px
  &-rect
    width 100px
    height 100px
    fill none
    stroke #666
    stroke-width 2
  &-grid
    stroke #666
    stroke-width 2
    fill none
  &-forbidden
  &-blank-circle
    stroke #666
    stroke-width 1
    fill none
  &-block-circle
    fill #333
  &-barre
    height 16px
    fill #333
    &-fret
      fill #333
      font-size 14px
      font-weight 700
  &-string-key
    fill #333
    font-size 10px
    font-weight 700
  &-name
    fill #333
    font-size 20px
    font-weight 700
@keyframes chord-logo-spin
  from 
    transform rotate(0deg)
  to
    transform rotate(360deg)
</style>

<script>
import ChordSelect from '~/components/chordSelect'
import ChordDraw from '~/components/chordDraw'

export default {
  components: {
    ChordSelect, ChordDraw
  },
  methods: {
    hideLoading() {
      this.$refs.chordSelect.hideLoading()
    },
    selectFinish(chordTone) {
      this.$refs.chordDraw.draw(chordTone)
    }
  }
}
</script>

