<template>
  <div id="app">
    <transition name="fade" appear>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      home: [[54, 55, 149], [92, 37, 141]],
      about: [[203, 45, 62], [123, 67, 151]],
      projects: [[52, 143, 80], [86, 180, 211]],
      contact: [[52, 143, 80], [86, 180, 211]],
      currentRoute: '/',
      count: 0
    }
  },
  methods: {
    colourTransition: function () {
      let start
      let end
      if (this.currentRoute === '/') {
        start = this.home[0]
        end = this.home[1]
      } else if (this.currentRoute === '/about') {
        start = this.about[0]
        end = this.about[1]
      } else if (this.currentRoute === '/projects') {
        start = this.projects[0]
        end = this.projects[1]
      } else if (this.currentRoute.includes('/projects/')) {
        start = this.about[0]
        end = this.about[1]
      } else if (this.currentRoute === '/hire') {
        start = this.contact[0]
        end = this.contact[1]
      } else {
        start = this.home[0]
        end = this.home[1]
      }
      if (this.count === 0) {
        document.body.style.backgroundColor = 'rgb(' + start[0] + ',' + start[1] + ',' + start[2] + ')'
        this.count = 1
      } else {
        document.body.style.backgroundColor = 'rgb(' + end[0] + ',' + end[1] + ',' + end[2] + ')'
        this.count = 0
      }
    }
  },
  created: function () {
    this.currentRoute = this.$router.history.current.path
    setTimeout(() => { document.body.className += ' addTransition' }, 100)
    setInterval(() => { this.colourTransition() }, 3000)
  },
  updated: function () {
    this.currentRoute = this.$router.history.current.path
  }
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
    background-color: rgba(92,37,141,1)
    &.addTransition
      transition: background-color 3s ease-in-out

  div, p, a, input, textarea, h1, h2
    box-sizing: border-box

</style>
