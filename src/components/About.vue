<template>
  <div class="about">
    <TopNav />
    <div class="about-wrap">
      <div class="icon_header animated zoomIn">
        <span class="lnr lnr-license"></span>
      </div>
      <h1 class="animated zoomIn">About Me</h1>
      <p  class="animated fadeIn">
        Hi! I'm Lew, a front-end developer (and sometimes designer) based in Cambridgeshire, UK. I have over 6 years experience developing with Javascript, CSS3, HTML5 and php. Through the years I've learned a number of frameworks including jQuery, WordPress, React, Vue.js (this site is built with Vue), Meteor and various others. Below you can see the things I'm most competent in, as well a list of things that im currently learning. If you wish to see more work and/or projects that I have been a front-end developer on, please <router-link to="/hire/">get in touch</router-link> and I can supply more information!
      </p>
      <h3 class="animated zoomIn">Things I <i class="icon ion-ios-heart-outline"></i> Using</h3>
      <div class="icon_row animated fadeIn">
        <i class="devicons devicons-javascript animated fadeIn"><div class="tooltip">JavaScript</div></i>
        <i class="devicons devicons-css3 animated fadeIn"><div class="tooltip">CSS3</div></i>
        <i class="devicons devicons-html5 animated fadeIn"><div class="tooltip">HTML5</div></i>
        <i class="devicons devicons-php animated fadeIn"><div class="tooltip">php</div></i>
        <i class="devicons devicons-nodejs_small animated fadeIn"><div class="tooltip">nodejs</div></i>
        <i class="devicons devicons-sass animated fadeIn"><div class="tooltip">Sass</div></i>
        <i class="devicons devicons-react animated fadeIn"><div class="tooltip">React</div></i>
        <i class="devicons devicons-meteor animated fadeIn"><div class="tooltip">Meteor</div></i>
        <i class="devicons devicons-wordpress animated fadeIn"><div class="tooltip">WordPress</div></i>
        <i class="devicons devicons-mongodb animated fadeIn"><div class="tooltip">mongodb</div></i>
        <i class="devicons devicons-mysql animated fadeIn"><div class="tooltip">MySQL</div></i>
        <i class="devicons devicons-bootstrap animated fadeIn"><div class="tooltip">Bootstrap</div></i>
        <i class="devicons devicons-jquery animated fadeIn"><div class="tooltip">Jquery</div></i>
        <i class="devicons devicons-git animated fadeIn"><div class="tooltip">git</div></i>
        <i class="devicons devicons-atom animated fadeIn"><div class="tooltip">Atom</div></i>
      </div>
      <h3 class="animated zoomIn delay">Things I'm Learning</h3>
      <div class="icon_row animated fadeIn delay">
        <i class="devicons devicons-python animated fadeIn"><div class="tooltip">Python</div></i>
        <i class="devicons devicons-django animated fadeIn"><div class="tooltip">django</div></i>
        <i class="devicons devicons-laravel animated fadeIn"><div class="tooltip">Laravel</div></i>
        <i class="devicons devicons-swift animated fadeIn"><div class="tooltip">Swift</div></i>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import TopNav from './TopNav'
Vue.component('TopNav', TopNav)

import Footer from './Footer'
Vue.component('Footer', Footer)

export default {
  name: 'about',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../scss/vars.scss'

  .about
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
    padding-bottom: 75px
    .icon_header
      font-size: 56px
      text-align: center
    .about-wrap
      max-width: 950px
      width: 100%
    h1
      text-align: center
      display: block
      width: 100%
      margin: 0 0 25px
      font-size: 52px
      font-weight: 200
      animation-delay: .2s
      animation-duration: .5s
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
    p
      width: 90%
      margin: 0 auto 45px
      font-size: 18px
      letter-spacing: 1.9px
      line-height: 1.8
      font-weight: 300
      animation-delay: .4s
      animation-duration: .5s
      text-align: left
      @media screen and (max-width: 650px)
        letter-spacing: 1.7px
        line-height: 1.5
      @media screen and (max-width: 485px)
        letter-spacing: 1.5px
        line-height: 1.5
        font-size: 16px
      a
        color: #fff
        display: inline-block
        text-decoration: none
        border-bottom: 1px solid #fff
        transition: .3s
        &:hover
          color: rgba(0,0,0,.7)
          border-bottom: 1px solid rgba(0,0,0,.7)
    .icon_row
      margin: 0 auto
      display: flex
      font-size: 54px
      align-items: center
      justify-content: center
      padding-bottom: 0
      flex-wrap: wrap
      width: 85%
      animation-delay: .6s
      animation-duration: .5s
      &.delay
        animation-delay: .8s
      i
        margin: 0 5px 35px
        position: relative
        transition: .2s
        animation-delay: .6s
        &:nth-child(1)
          animation-delay: .7s
        &:nth-child(2)
          animation-delay: .75s
        &:nth-child(3)
          animation-delay: .8s
        &:nth-child(4)
          animation-delay: .85s
        &:nth-child(5)
          animation-delay: .9s
        &:nth-child(6)
          animation-delay: .95s
        &:nth-child(7)
          animation-delay: 1s
        &:nth-child(8)
          animation-delay: 1.05s
        &:nth-child(9)
          animation-delay: 1.1s
        &:nth-child(10)
          animation-delay: 1.15s
        &:nth-child(11)
          animation-delay: 1.2s
        &:nth-child(12)
          animation-delay: 1.25s
        &:nth-child(13)
          animation-delay: 1.3s
        &:nth-child(14)
          animation-delay: 1.35s
        &:nth-child(15)
          animation-delay: 1.4s
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
            bottom: -70%


</style>
