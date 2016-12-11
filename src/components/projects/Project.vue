<template>
  <div class="project">
    <TopNav />
    <div v-if="portfolio.name" class="inner_wrap">
      <h1 class="animated zoomIn"><router-link to="/projects" class="back_button"><i class="icon ion-ios-arrow-left"></i></router-link><span  v-cloak>{{portfolio.name}}</span></h1>
      <Slider class="images animated zoomIn" v-bind:photos="portfolio.photos"></Slider>
      <div class="technologies">
        <i v-for="(tech, index) in portfolio.tech" :class="'devicons devicons-'+tech+' animated fadeIn'"><div class="tooltip">{{tech}}</div></i>
      </div><!--
   --><div class="cta animated fadeIn">
        <a v-if="portfolio.url !== '#'" :href="portfolio.url" target="_blank">VISIT</a>
      </div>
      <p class="animated fadeIn">
        {{portfolio.desc}}
      </p>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import _ from 'underscore'

import TopNav from '../TopNav'
Vue.component('TopNav', TopNav)

import Slider from '../Slider'
Vue.component('Slider', Slider)

export default {
  name: 'project',
  data () {
    return {
      slug: this.$route.params.slug,
      portfolio: []
    }
  },
  beforeCreate: function () {
    this.$http.get('../../static/portfolio.json').then((response) => {
      this.portfolio = _.findWhere(response.body.portfolio, {slug: this.slug})
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="sass" scoped>
  @import '../../scss/vars.scss'
  @import '../../scss/mixins.scss'

  [v-cloak]
    display: none

  .project
    background: $gradient2
    position: absolute
    top: 0
    left: 0
    right: 0
    min-height: 100vh
    color: #fff
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    padding-top: 75px
    .inner_wrap
      width: 100%
      max-width: 800px
    h1
      text-align: center
      display: block
      width: 100%
      max-width: 800px
      padding: 0 15px
      margin: 0 auto 25px
      font-size: 52px
      font-weight: 200
      display: block
      animation-delay: .2s
      animation-duration: .5s
      .back_button
        color: #fff
        font-size: 33px
        text-align: center
        animation-delay: .4s
        margin: 0 auto 10px
        padding: 0
        width: 50px
        height: 50px
        border-radius: 3px
        transition: .2s
        vertical-align: middle
        border: 1px solid #fff
        display: block
        position: relative
        i
          display: block
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%,-50%)
        &:hover
          color: $secondary
      span
        display: inline-block
        vertical-align: middle

    h2
      text-align: center
      display: block
      width: 100%
      margin: 25px 0 0
      font-family: $font1
      font-size: 48px
      animation-duration: .5s
    h3
      font-size: 32px
      font-weight: 200
      width: 100%
      text-align: center
      letter-spacing: .5px
      margin: 0
      animation-delay: .4s
      animation-duration: .5s
      &:after
        display: block
        content: ""
        background-color: rgba(255,255,255,.5)
        width: 15px
        height: 1px
        margin: 15px auto 10px
        animation: zoomIn .5s
      &.delay
        animation-delay: .6s
    .images
      width: 100%
      text-align: center
      padding-bottom: 20px
      position: relative
      @include long-boxshadow()
      margin: 0 0 20px
    p
      width: 100%
      max-width: 800px
      margin: 0 auto 45px
      font-size: 18px
      letter-spacing: .5px
      line-height: 1.5
      font-weight: 300
      animation-delay: .4s
      animation-duration: .5s
      display: block
      z-index: 1000
      position: relative
      @media screen and (max-width: 800px)
        width: 100%
        font-size: 16px
        padding: 0 20px
    .cta
      width: 40%
      margin: 0 0 15px
      display: inline-block
      text-align: right
      vertical-align: top
      animation-delay: .4s
      @media screen and (max-width: 800px)
        padding-right: 20px
      a
        color: #fff
        display: inline-block
        padding: 12px 32px
        background: $primary
        text-decoration: none
        border-radius: 2px
        transition: .15s
        &:hover
          color: $primary
          background: #fff
    .technologies
      font-size: 36px
      align-items: center
      justify-content: center
      padding-bottom: 0
      width: 60%
      animation-delay: .2s
      animation-duration: .5s
      margin: 0 0 15px
      display: inline-block
      vertical-align: top
      @media screen and (max-width: 800px)
        padding-left: 20px
        padding-right: 40px;
      i
        margin: 0 5px 35px
        position: relative
        transition: .2s
        animation-delay: .4s
        z-index: 100000
        &:nth-child(1)
          animation-delay: .45s
        &:nth-child(2)
          animation-delay: .5s
        &:nth-child(3)
          animation-delay: .55s
        &:nth-child(4)
          animation-delay: .6s
        &:nth-child(5)
          animation-delay: .65s
        &:nth-child(6)
          animation-delay: .7s
        &:nth-child(7)
          animation-delay: .75s
        &:nth-child(8)
          animation-delay: .8s
        &:nth-child(9)
          animation-delay: .85s
        &:nth-child(10)
          animation-delay: .9s
        &:nth-child(11)
          animation-delay: .95s
        &:nth-child(12)
          animation-delay: 1s
        &:nth-child(13)
          animation-delay: 1.05s
        &:nth-child(14)
          animation-delay: 1.1s
        &:nth-child(15)
          animation-delay: 1.15s
        .tooltip
          color: #fff
          font-family: $font2
          display: block
          position: absolute
          background: rgba(0,0,0,.5)
          font-size: 14px
          padding: 8px 10px
          border-radius: 3px
          left: 50%
          bottom: -60%
          transform: translateX(-50%)
          transition: .2s
          opacity: 0
          pointer-events: none
          z-index: 100000
          text-transform: uppercase
          &:after
          	bottom: 100%
          	left: 50%
          	border: solid transparent
          	content: " "
          	height: 0
          	width: 0
          	position: absolute
          	pointer-events: none
          	border-color: rgba(0, 0, 0, 0)
          	border-bottom-color: rgba(0,0,0,.5)
          	border-width: 5px
          	margin-left: -5px
        &:hover
          color: rgba(0,0,0,.7)
          cursor: help
          transform: translateY(-10px)
          .tooltip
            opacity: 1
            bottom: -105%


</style>
