<template>
  <div class="slider" :ref="'slider_wrap'" v-bind:style="{ height: imgWidth + 'px' }">
    <ul v-bind:style="{ left: currentPos + 'px' }" :ref="'slider_bar'">
      <li v-for="(photo, index) in photos" :ref="'photo_'+index">
        <img :src="photo" class="slide_img"  v-bind:style="{ height: imgWidth + 'px', width: imgWidth + 'px' }" />
      </li>
    </ul>
    <div class="prev" v-on:click="prevSlide()">
      <i class="icon ion-ios-arrow-left"> </i>
    </div>
    <div class="next" v-on:click="nextSlide()">
      <i class="icon ion-ios-arrow-right"> </i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'slider',
  props: ['photos'],
  data () {
    return {
      amount: this.photos.length,
      currentSlide: 1,
      currentPos: 0,
      imgWidth: 0
    }
  },
  methods: {
    nextSlide: function () {
      if (this.currentSlide >= this.amount) {
        this.currentPos = 0
        this.currentSlide = 1
      } else {
        this.currentPos -= this.imgWidth
        this.currentSlide++
      }
    },
    prevSlide: function () {
      if (this.currentSlide === 1) {
        this.currentPos = -((this.amount - 1) * this.imgWidth)
        this.currentSlide = this.amount
      } else {
        this.currentPos += this.imgWidth
        this.currentSlide--
      }
    },
    setImgWidth: function () {
      this.imgWidth = this.$refs.slider_wrap.clientWidth
      if (this.currentPos !== 0) {
        this.currentPos = -((this.currentSlide - 1) * this.imgWidth)
      } else {
        this.currentPos = 0
      }
    }
  },
  mounted: function () {
    this.setImgWidth()
  },
  created: function () {
    window.addEventListener('resize', this.setImgWidth)
  },
  destroyed: function () {
    window.removeEventListener('resize', this.setImgWidth)
  }
}
</script>

<style lang="sass" scoped>
  @import '../scss/vars.scss'
  @import '../scss/mixins.scss'

  .slider
    color: #fff
    position: relative
    height: auto
    max-width: 800px
    width: 100%
    overflow: hidden
    transition-delay: 0s
    .next
      position: absolute
      right: 0
      top: 0
      bottom: 0
      width: 20%
      font-size: 32px
      transition: .25s
      transition-delay: 0s
      background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(0,0,0,0.56) 100%)
      background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(0,0,0,0.56) 100%)
      background: linear-gradient(to right,  rgba(255,255,255,0) 0%, rgba(0,0,0,0.56) 100%)
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#8f000000',GradientType=1 )
      opacity: 0
      i
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        transition: .15s
        transition-delay: 0s
      &:hover
        cursor: pointer
        color: $third
        i
          left: 55%
    .prev
      position: absolute
      left: 0
      top: 0
      bottom: 0
      width: 20%
      font-size: 32px
      transition: .25s
      transition-delay: 0s
      background: -moz-linear-gradient(left,  rgba(0,0,0,0.56) 0%, rgba(255,255,255,0) 100%)
      background: -webkit-linear-gradient(left,  rgba(0,0,0,0.56) 0%, rgba(255,255,255,0) 100%)
      background: linear-gradient(to right,  rgba(0,0,0,0.56) 0%, rgba(255,255,255,0) 100%)
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#8f000000', endColorstr='#00ffffff',GradientType=1 )
      opacity: 0
      i
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        transition: .15s
        transition-delay: 0s
      &:hover
        cursor: pointer
        color: $third
        i
          left: 45%
    &:hover
      .prev
        opacity: 1
      .next
        opacity: 1
    ul
      list-style: none
      margin: 0
      padding: 0
      white-space: nowrap
      text-align: left
      position: absolute
      left: 0
      top: 0
      transition: left .3s
      li
        margin: 0
        padding: 0
        display: inline-block
        img
          max-width: 800px
          width: 100%
    @media screen and (max-width: 800px)
      padding-top: 75px
    .hire-wrap
      width: 85%
      text-align: center
    h1
      text-align: center
      display: block
      width: 100%
      margin: 0 0 25px
      font-size: 52px
      font-weight: 200
      animation-delay: .1s
      animation-duration: .5s


</style>
