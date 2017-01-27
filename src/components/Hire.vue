<template>
  <div class="hire">
    <TopNav />
    <div class="hire-wrap">
      <div class="icon_header animated zoomIn">
        <span class="lnr lnr-envelope"></span>
      </div>
      <h1 class="animated zoomIn">Hire Me</h1>
      <div class="hire-left animated fadeIn">
        <p class="lead animated fadeIn">
          Let's work together! If you need more examples of work, a CV, to talk about a project, or to just say hi - use the form or the info below!
        </p>
        <ul class="animated fadeIn">
          <li>
            <i class="lnr lnr-map-marker"></i> Manchester / Cambridge, UK
          </li>
          <li>
            <i class="lnr lnr-envelope"></i> <a href="mailto:lew@lewj.me">lew[at]lewj.me</a>
          </li>
        </ul>
      </div><!--
   --><div class="hire-right">
         <p>
           <div id="success" v-bind:class="{ active: success }">
             {{success}}
           </div>
           <div id="error" v-bind:class="{ active: error }">
             {{error}}
           </div>
           <form v-on:submit="sendEmail">
             <label class="animated fadeIn">Name</label>
             <input type="text" id="name" v-model="name" class="animated fadeIn" />

             <label class="animated fadeIn">Email</label>
             <input type="text" id="email" v-model="email" class="animated fadeIn" />

             <label class="animated fadeIn">Message</label>
             <textarea type="text" id="message" v-model="message" rows="6" class="animated fadeIn"></textarea>

             <button type="submit" class="animated fadeIn">Send</button>
           </form>
         </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import TopNav from './TopNav'
import request from 'superagent'
Vue.component('TopNav', TopNav)

import Footer from './Footer'
Vue.component('Footer', Footer)

export default {
  name: 'hire',
  data () {
    return {
      error: '',
      success: '',
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },
  methods: {
    sendEmail: function (event) {
      event.preventDefault()

      let name = event.target[0].value
      let email = event.target[1].value
      let message = event.target[2].value

      request
        .post('/send/')
        .send({ name, email, message })
        .set('Accept', 'application/json')
        .end(function (err, res) {
          if (err) {
            console.log(err)
            this.error = 'Something went wrong'
          } else {
            this.error = ''
            this.success = ''
            var code = res.text
            if (code.includes('name_req')) {
              this.error = 'Name is Required'
            } else if (code.includes('email_req')) {
              this.error = 'Email is Required'
            } else if (code.includes('email_inv')) {
              this.error = 'Email is Invalid'
            } else if (code.includes('message_req')) {
              this.error = 'Message is Required'
            } else if (code === '{"success":"sent"}') {
              this.error = ''
              this.success = 'Email Sent'
              this.name = ''
              this.email = ''
              this.message = ''
            }
          }
        }.bind(this))
    }
  }
}
</script>

<style lang="sass" scoped>
  @import '../scss/vars.scss'
  @import '../scss/mixins.scss'

  .hire
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
    a
      color: #fff
      display: inline-block
      text-decoration: none
      border-bottom: 1px solid #fff
      transition: .3s
      &:hover
        color: rgba(0,0,0,.7)
        border-bottom: 1px solid rgba(0,0,0,.7)
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
          letter-spacing: 1.5px
          line-height: 1.8
          font-weight: 300
          font-size: 18px
          @media screen and (max-width: 345px)
            letter-spacing: 1.2px
            font-size: 16px
          li
            margin-bottom: 5px
            i
              font-size: 28px
              vertical-align: middle
              width: 30px
              margin-right: 10px
              display: inline-block
              text-align: center
      .hire-right
        display: inline-block
        width: 50%
        vertical-align: top
        @media screen and (max-width: 750px)
          width: 100%
          display: block
        #error
          background: rgba(255,0,0,.6)
          color: #fff
          opacity: 0
          width: 100%
          max-width: 350px
          margin: 0 auto 15px
          padding: 10px
          border-radius: 4px
          display: none
          transition: .3s
          &.active
            display: block
            opacity: 1
        #success
          background: rgba(100,255,100,.6)
          opacity: 0
          width: 100%
          max-width: 350px
          margin: 0 auto 15px
          padding: 10px
          border-radius: 4px
          display: none
          transition: .3s
          &.active
            display: block
            opacity: 1
        form
          display: block
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
      letter-spacing: 1.5px
      line-height: 1.6
      font-weight: 300
      animation-duration: .5s
      animation-delay: .2s
      &.lead
        width: 100%
        max-width: 350px
        display: block
        margin: 0 auto
        text-align: justify

</style>
