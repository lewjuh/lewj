<template>
  <div class="footer">
    <span class="copy_text">&copy; COPYRIGHT LEWJ.ME 2017</span> <a href="/" class="source_text"><span class="lnr lnr-code"></span> <span>VIEW SOURCE</span></a>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../scss/vars.scss'

  .footer
    position: absolute
    bottom: 0
    left: 0
    right: 0
    text-align: center
    height: 75px
    display: flex
    align-items: center
    justify-content: center
    font-size: 14px
    color: rgba(255,255,255,.4)
    transition: .2s
    @media screen and (max-width: 360px)
      font-size: 11px
    .copy_text
      margin-right: 25px
      @media screen and (max-width: 360px)
        margin-right: 15px
    .source_text
      color: rgba(255,255,255,.4)
      text-decoration: none
      display: flex
      align-items: center
      justify-content: center
      border-bottom: 1px solid rgba(255,255,255,.4)
      transition: .2s
      &:hover
        border-bottom: 1px solid rgba(0,0,0,.7)
        color: rgba(0,0,0,.7)
      .lnr
        font-size: 22px
        margin-right: 5px
        margin-bottom: 2px
    &:hover
      color: rgba(255,255,255,.75)
      .source_text
        color: rgba(255,255,255,.75)
        border-bottom: 1px solid rgba(255,255,255,.75)
        &:hover
          border-bottom: 1px solid rgba(0,0,0,.7)
          color: rgba(0,0,0,.7)
</style>
