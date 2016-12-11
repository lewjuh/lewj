<template>
  <div id="app">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
  @import './scss/vars.scss'
  @import './assets/icons/css/devicons.min.css'
  @import './../node_modules/normalize.css/normalize.css'
  @import './../node_modules/animate.css/animate.min.css'

  .fade-enter-active, .fade-leave-active
    transition: opacity .3s
  .fade-enter, .fade-leave-active
    opacity: 0

  body
    margin: 0
    padding: 0
    font-family: $font2
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale

  div, p, a, input, textarea, h1, h2
    box-sizing: border-box

</style>
