<template>
  <div class="container-chordSelect">
    <div class="key-select">
      <div v-for="(chord, i) in state.chordTone" :key="'reactkey_' + i" :id="'key' + (i + 1)" class="key-num square" 
        @touchstart="touchStart(i, $event)"
        @touchmove="touchMove(i, $event)"
        @touchend="touchEnd(i)"
        @mousedown="mouseDown(i, $event)"
        @mouseup="mouseUp(i, $event)"
        @mousemove="mouseMove(i, $event)"
        @mouseleave="mouseLeave(i, $event)"
        >
        <span class="noselect">{{chord}}</span>
        <div :class="'key-bar' + (state['keyBarShow'+(i+1)]? ' keybar-show': '')" :style="{left : state['keyBar'+(i+1)]+'px'}"></div>
      </div>
    </div>
    <div class="select-notify noselect">左右拖动可改变和弦组成音</div>
    <div class="chord-count">
      <div :class="state.type === 3 ? 'noselect active' : 'noselect'" @click="chordCountChange(3)">三音和弦</div>
      <div :class="state.type === 4 ? 'noselect active' : 'noselect'" @click="chordCountChange(4)">四音和弦</div>
    </div>
    <div :class="'loading-box' + (state.loading?' show' : '')">
      <img src="~/assets/images/bars.svg" alt="" class="loading" />
    </div>
  </div>
</template>

<style lang="stylus">
.container-chordSelect
  width 100%
  .key-select
    width 100%
    text-align center
    padding 0 1rem
    margin-top 20px
    display flex
    justify-content center
    flex-wrap nowrap
    .square
      width 100%
      &:after
        content ''
        display block
        padding-top 100%
    .key-num
      position relative
      background transparent
      max-width 170px
      min-width 70px
      min-height 70px
      cursor pointer
      flex 1
      transition .3s ease
      &:before
        content: ''
        display block
        position absolute
        left 50%
        bottom 0
        height 2px
        width 80%
        background #ddd
        z-index 1
        transform translate3d(-50%, 0, 0)
      &:last-of-type
        margin-right 0
      > span
        position absolute
        display inline-block
        color #666
        top 50%
        left 50%
        font-size 40px
        transform translate3d(-50%, -50%, 0)
      .key-bar
        opacity 0
        position absolute
        left 20px
        bottom 0
        width 0
        height 0
        border-top 10px solid transparent
        border-left 10px solid transparent
        border-right 10px solid transparent
        border-bottom 10px solid #ddd
        transition .3s ease
        &.keybar-show
          opacity 1
  .select-notify
    line-height 50px
    color #ddd
    font-size 13px
    text-align center
    &.noselect
      user-select none
  .chord-count
    width 100%
    text-align center
    > div
      display inline-block
      text-align center
      width 15%
      line-height 30px
      font-size 13px
      min-width 80px
      max-width 200px
      background #fff
      color #aaa
      margin-right 10px
      border-radius 2px
      cursor pointer
      transition .3s ease
      &:last-of-type
        margin-right 0
      &.active
        background #ddd
        color #666
  .loading-box
    opacity 0
    margin-top 20px
    width 100%
    height 20px
    text-align center
    transition .3s ease
    &.show
      opacity 1
      margin 20px 0
    .loading
      height 100%
</style>

<script>
export default {
	props: {
		selectFinish: Function
	},
  data: ()=>({
    keyMap: ['1', '#1', 'b2', '2', '#2', 'b3', '3', '4', '#4', 'b5', '5', '#5', 'b6', '6', '#6', 'b7', '7'],
    state: {
      chordTone: ['1', '3', '5'],
      type: 3,
      keyBar1: 0,
      keyBar2: 38,
      keyBar3: 54,
      keyBar4: 0,
      keyBarShow1: false,
      keyBarShow2: false,
      keyBarShow3: false,
      keyBarShow4: false,
      loading: false
    }
  }),
  methods: {
    isArray(data) {
      return Object.prototype.toString.call(data) === '[object Array]'
    },
    isNumber(data) {
      return Object.prototype.toString.call(data) === '[object Number]'
    },
    isMobile() {
      return !!(navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))
    },
    touchStart(index, e) {
      let keyBarName = "keyBar" + (index + 1)
      let clientX = this.isNumber(e) ? e : e.touches[0].clientX
      this.state["keyBarShow" + (index + 1)] = true
      this.selectWidth = document.getElementById("key1").clientWidth
      this.maxLeft = this.selectWidth * 0.9 - 20
      this.minLeft = this.selectWidth * 0.1
      this.startX = clientX
      this.keyBarX = this.state[keyBarName]
    },
    touchMove(index, e) {
      let keyBarName = "keyBar" + (index + 1)
      let x = this.isNumber(e) ? e : e.touches[0].clientX
      let dx = x - this.startX
      let resultX = (this.keyBarX + dx) * 0.8
      this.state[keyBarName] = resultX < this.minLeft ? this.minLeft : (resultX > this.maxLeft ? this.maxLeft : resultX)
      let percent = (this.state[keyBarName] - this.minLeft) / (this.maxLeft - this.minLeft + 0.01)
      let newKey = this.keyMap[Math.floor(percent * this.keyMap.length)]
      this.state.chordTone = this.state.chordTone.concat()
      this.state.chordTone[index] = newKey
    },
    touchEnd(index) {
      this.state["keyBarShow" + (index + 1)] = false
      this.state.loading = true
      this.selectFinish(this.state.chordTone)
    },
    mouseDown(index, e) {
      if (this.isMobile()) return
      this.isMouseDown = true
      this.touchStart(index, e.pageX)
	  },
    mouseUp(index, e) {
      if (this.isMobile()) return
      this.isMouseDown = false
      this.touchEnd(index)
    },
    mouseMove(index, e) {
      if (this.isMobile() || !this.isMouseDown) return
      this.touchMove(index, e.pageX)
    },
    mouseLeave(index, e) {
      if (this.isMobile() || !this.isMouseDown) return
      this.isMouseDown = false
      this.touchEnd(index)
    },
    chordCountChange(count) {
      this.state.chordTone = this.state.chordTone.slice(0, count),
      this.state.type = count
      if (count === 4 && this.state.chordTone.length < 4) {
        this.state.chordTone = this.state.chordTone.concat(['1']),
        this.state.keyBar4 = 0
      }
    },
    hideLoading() {
      this.state.loading = false
    }
  }
}
</script>


