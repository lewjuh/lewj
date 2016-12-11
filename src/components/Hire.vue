<template>
  <div class="hire">
    <TopNav />
    <div class="hire-wrap">
      <h1 class="animated zoomIn">Hire Me</h1>
      <div class="hire-left animated fadeIn">
        <p class="lead animated fadeIn">
          Let's work together! If you need more examples of work, a CV, to talk about a project, or to just say hi - use the form or the info below!
        </p>
        <ul class="animated fadeIn">
          <li>
            <i class="icon ion-ios-location-outline"></i> Manchester / Cambridge, UK
          </li>
          <li>
            <i class="icon ion-ios-email-outline"></i> lew[at]lewj.me
          </li>
        </ul>
      </div><!--
   --><div class="hire-right">
         <p>
           <label class="animated fadeIn">Name</label>
           <input type="text" class="animated fadeIn" />

           <label class="animated fadeIn">Email</label>
           <input type="text" class="animated fadeIn" />

           <label class="animated fadeIn">Message</label>
           <textarea type="text" rows="6" class="animated fadeIn"></textarea>

           <button type="submit" class="animated fadeIn">Send</button>
         </p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import TopNav from './TopNav'
Vue.component('TopNav', TopNav)

export default {
  name: 'hire',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../scss/vars.scss'
  @import '../scss/mixins.scss'

  .hire
    background: $gradient3
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
    @media screen and (max-width: 800px)
      padding-top: 75px
    .hire-wrap
      max-width: 950px
      width: 100%
      text-align: center
      @media screen and (max-width: 390px)
        padding: 0 15px
      .hire-left
        display: inline-block
        width: 50%
        vertical-align: top
        @media screen and (max-width: 750px)
          width: 100%
          display: block
        ul
          list-style: none
          text-align: left
          padding: 0
          width: 100%
          max-width: 350px
          margin: 15px auto
          letter-spacing: .5px
          line-height: 1.5
          font-weight: 300
          font-size: 18px
          li
            margin-bottom: 5px
            i
              font-size: 28px
              vertical-align: middle
              width: 30px
              display: inline-block
              text-align: center
      .hire-right
        display: inline-block
        width: 50%
        vertical-align: top
        @media screen and (max-width: 750px)
          width: 100%
          display: block
    h1
      text-align: center
      display: block
      width: 100%
      margin: 0 0 25px
      font-size: 52px
      font-weight: 200
      animation-delay: .1s
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
      font-size: 28px
      font-weight: 200
      width: 100%
      text-align: center
      letter-spacing: .5px
      margin: 0
      &:after
        display: block
        content: ""
        background-color: rgba(255,255,255,.5)
        width: 15px
        height: 1px
        margin: 15px auto 10px
    p
      width: 100%
      margin: 0 auto 10px
      font-size: 18px
      letter-spacing: .5px
      line-height: 1.5
      font-weight: 300
      animation-duration: .5s
      animation-delay: .2s
      &.lead
        width: 100%
        max-width: 350px
        display: block
        margin: 0 auto
        text-align: justify
      label
        width: 100%
        max-width: 350px
        display: block
        margin: 0 auto
        padding: 0px 0 7px
        text-align: left
        animation-delay: .3s
      input
        width: 100%
        max-width: 350px
        padding: 15px
        margin-bottom: 20px
        color: #348F50
        border: 0
        @include large-boxshadow()
        outline: 2px solid rgba(255,255,255,0)
        transition: .4s
        animation-duration: .3s
        animation-delay: .4s
        &:nth-child(4)
          animation-duration: .4s
          animation-delay: .5s
        &:focus
          outline: 2px solid #56B4D3
          outline-offset: 0
          @include long-boxshadow()
      textarea
        width: 100%
        max-width: 350px
        padding: 15px
        color: #348F50
        border: 0
        @include large-boxshadow()
        outline: 2px solid rgba(255,255,255,0)
        transition: .4s
        animation-duration: .5s
        animation-delay: .6s
        &:focus
          outline: 2px solid #56B4D3
          outline-offset: 0
          @include long-boxshadow()
      button
        display: block
        width: 100%
        max-width: 350px
        padding: 12px
        margin: 10px auto 0
        border: 3px solid #fff
        border-radius: 3px
        background-color: rgba(255,255,255,0)
        color: #fff
        font-size: 18px
        font-weight: 300
        font-family: $font2
        text-transform: uppercase
        animation-duration: .6s
        animation-delay: .8s
        @include large-boxshadow()
        transition: .2s
        &:hover
          cursor: pointer
          font-weight: 400
          background-color: rgba(255,255,255,1)
          color: #56B4D3
          @include long-boxshadow()

</style>
