<template>
  <div class="home">
    <div class="header">
      <div class="title-wrap">
        <h1 class="animated zoomIn">lewj</h1>
        <h2 class="animated zoomIn">Front-End Developer</h2>
        <router-link to="/about" class="nav-link animated zoomIn">About</router-link>
        <router-link to="/projects" class="nav-link animated zoomIn">Projects</router-link>
        <router-link to="/hire" class="nav-link animated zoomIn">Hire Me</router-link>
        <div class="social">
          <a href="https://dribbble.com/LewJ" target="_blank"><i class="icon ion-social-dribbble" aria-hidden="true"></i></a>
          <a href="https://github.com/lewjuh" target="_blank"><i class="icon ion-social-github" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="sass">
  @import '../scss/vars.scss'

  .header
    background: $gradient
    color: #fff
    position: absolute
    top: 0
    left: 0
    right: 0
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    min-height: 100vh
    .title-wrap
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      min-width: 530px
      @media screen and (max-width: 540px)
        min-width: 445px
      @media screen and (max-width: 495px)
        min-width: 365px
      @media screen and (max-width: 385px)
        min-width: 285px
      h1
        margin: 0
        font-family: $font1
        font-size: 92px
        width: 150px
        animation-duration: .5s
        @media screen and (max-width: 540px)
          font-size: 64px
        @media screen and (max-width: 385px)
          font-size: 56px
      h2
        font-weight: 200
        font-size: 56px
        padding: 0
        margin: 0 0 15px
        animation-duration: .5s
        animation-delay: .2s
        @media screen and (max-width: 540px)
          font-size: 48px
        @media screen and (max-width: 495px)
          font-size: 38px
        @media screen and (max-width: 385px)
          font-size: 32px
      .nav-link
        font-family: $font2
        display: inline-block
        border: 1px solid #fff
        padding: 12px 35px
        color: #fff
        text-decoration: none
        margin-left: 4px
        margin-right: 6px
        font-weight: 200
        font-size: 18px
        letter-spacing: 1px
        border-radius: 3px
        transition: .2s
        animation-duration: .5s
        animation-delay: .3s
        &:nth-child(1n)
          animation-delay: .5s
        &:nth-child(2n)
          animation-delay: .4s
        &:nth-child(3n)
          animation-delay: .3s
        &:hover
          background: #fff
          color: $secondary
          font-weight: 200
        @media screen and (max-width: 495px)
          font-size: 16px
          padding: 10px 25px
        @media screen and (max-width: 385px)
          font-size: 16px
          padding: 10px 10px
      .social
        display: block
        width: 100%
        padding-top: 20px
        a
          color: #fff
          font-size: 36px
          vertical-align: top
          display: inline-block
          line-height: 50px
          text-align: center
          transition: color .15s
          &:hover
            color: $third
          &:first-child
            padding-top: 2px
            margin-right: 15px
            margin-left: 4px
          .ion-social-github
            font-size: 31px
</style>
