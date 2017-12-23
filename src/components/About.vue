<template>
  <div class="about">
    <TopNav />
    <div class="about-wrap">
      <div class="icon_header animated zoomIn">
        <span class="flaticon-about"></span>
      </div>
      <h1 class="animated zoomIn">About Me</h1>
      <p  class="animated fadeIn">
        Hi! I'm Lew, a front-end developer (and sometimes designer) based in Cambridgeshire, UK. I have over 6 years experience developing with Javascript, CSS3, HTML5 and php. Through the years I've learned a number of frameworks including jQuery, WordPress, React, Vue.js (this site is built with Vue), Meteor and various others. Below you can see the things I'm most competent in, as well a list of things that im currently learning. If you wish to see more work and/or projects that I have been a front-end developer on, please <router-link to="/hire/">get in touch</router-link> and I can supply more information!
      </p>
      <h3 class="animated zoomIn">Things I <i class="icon ion-ios-heart-outline"></i> Using</h3>
      <div class="icon_row animated fadeIn">
        <i class="devicon devicon-javascript-plain animated fadeIn"><div class="tooltip">JavaScript</div></i>
        <i class="devicon devicon-css3-plain animated fadeIn"><div class="tooltip">CSS3</div></i>
        <i class="devicon devicon-html5-plain animated fadeIn"><div class="tooltip">HTML5</div></i>
        <i class="devicon devicon-php-plain animated fadeIn"><div class="tooltip">php</div></i>
        <i class="devicon devicon-nodejs-plain animated fadeIn"><div class="tooltip">nodejs</div></i>
        <i class="devicon devicon-sass-plain animated fadeIn"><div class="tooltip">Sass</div></i>
        <i class="devicon devicon-react-plain animated fadeIn"><div class="tooltip">React</div></i>
        <i class="devicon devicon-vuejs-plain animated fadeIn"><div class="tooltip">Vue.js</div></i>
        <i class="devicon devicon-meteor animated fadeIn"><div class="tooltip">Meteor</div></i>
        <i class="devicon devicon-webpack-plain animated fadeIn"><div class="tooltip">webpack</div></i>
        <i class="devicon devicon-wordpress-plain animated fadeIn"><div class="tooltip">WordPress</div></i>
        <i class="devicon devicon-mongodb-plain animated fadeIn"><div class="tooltip">mongodb</div></i>
        <i class="devicon devicon-mysql-plain animated fadeIn"><div class="tooltip">MySQL</div></i>
        <i class="devicon devicon-bootstrap-plain animated fadeIn"><div class="tooltip">Bootstrap</div></i>
        <i class="devicon devicon-jquery-plain animated fadeIn"><div class="tooltip">Jquery</div></i>
        <i class="devicon devicon-git-plain animated fadeIn"><div class="tooltip">git</div></i>
        <i class="devicon devicon-atom-plain animated fadeIn"><div class="tooltip">Atom</div></i>
        <i class="devicon devicon-laravel-plain animated fadeIn"><div class="tooltip">Laravel</div></i>
      </div>
      <h3 class="animated zoomIn delay">Things I'm Learning</h3>
      <div class="icon_row animated fadeIn delay">
        <i class="devicon devicon-python-plain animated fadeIn"><div class="tooltip">Python</div></i>
        <i class="devicon devicon-django-plain animated fadeIn"><div class="tooltip">django</div></i>
        <i class="devicon devicon-swift-plain animated fadeIn"><div class="tooltip">Swift</div></i>
        <i class="devicon devicon-typescript-plain animated fadeIn"><div class="tooltip">TypeScript</div></i>
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

<style lang="scss" scoped>
  @import '../scss/vars.scss';

  .about {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    min-height: 100vh;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 75px;
    padding-bottom: 75px;

    .icon_header {
      font-size: 56px;
      text-align: center;
      span {
        &:before {
          font-size: 56px;
        }
      }
    }

    .about-wrap {
      max-width: 950px;
      width: 100%;
    }

    h1 {
      text-align: center;
      display: block;
      width: 100%;
      margin: 0 0 25px;
      font-size: 52px;
      font-weight: 200;
      animation-delay: 0.2s;
      animation-duration: 0.5s;
    }

    h2 {
      text-align: center;
      display: block;
      width: 100%;
      margin: 25px 0 0;
      font-family: $font1;
      font-size: 48px;
      animation-duration: 0.5s;
    }

    h3 {
      font-size: 32px;
      font-weight: 200;
      width: 100%;
      text-align: center;
      letter-spacing: 0.5px;
      margin: 0;
      animation-delay: 0.4s;
      animation-duration: 0.5s;

      &:after {
        display: block;
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        width: 15px;
        height: 1px;
        margin: 15px auto 10px;
        animation: zoomIn 0.5s;
      }

      &.delay {
        animation-delay: 0.6s;
      }
    }

    p {
      width: 90%;
      margin: 0 auto 45px;
      font-size: 18px;
      letter-spacing: 1.9px;
      line-height: 1.8;
      font-weight: 300;
      animation-delay: 0.4s;
      animation-duration: 0.5s;
      text-align: left;

      @media screen and (max-width: 650px) {
        letter-spacing: 1.7px;
        line-height: 1.5;
      }

      @media screen and (max-width: 485px) {
        letter-spacing: 1.5px;
        line-height: 1.5;
        font-size: 16px;
      }

      a {
        color: #fff;
        display: inline-block;
        text-decoration: none;
        border-bottom: 2px solid #fff;
        transition: 0.3s;

        &:hover {
          color: rgba(0, 0, 0, 0.7);
          border-bottom: 2px solid rgba(0, 0, 0, 0.7);
        }
      }
    }

    .icon_row {
      margin: 0 auto;
      display: flex;
      font-size: 54px;
      align-items: center;
      justify-content: center;
      padding-bottom: 0;
      flex-wrap: wrap;
      width: 85%;
      animation-delay: 0.6s;
      animation-duration: 0.5s;

      // &.delay {
      //   animation-delay: 0.8s;
      // }

      i {
        margin: 0 5px 35px;
        position: relative;
        transition: 0.2s;
        animation-delay: 0.6s;

        @for $i from 1 through 20 {
          &:nth-child(#{$i}) {
            animation-delay: 0.7s + (0.05 * $i);
          }
        }

        .tooltip {
          color: #fff;
          font-family: $font2;
          display: block;
          position: absolute;
          background: rgba(0, 0, 0, 0.5);
          font-size: 14px;
          padding: 8px 10px;
          border-radius: 3px;
          left: 50%;
          bottom: -60%;
          transform: translateX(-50%);
          transition: 0.2s;
          opacity: 0;
          pointer-events: none;

          &:after {
            bottom: 100%;
            left: 50%;
            border: solid transparent;
            content: " ";
            height: 0;
            width: 0;
            position: absolute;
            pointer-events: none;
            border-color: rgba(0, 0, 0, 0);
            border-bottom-color: rgba(0, 0, 0, 0.5);
            border-width: 5px;
            margin-left: -5px;
          }
        }

        &:hover {
          color: rgba(0, 0, 0, 0.7);
          cursor: help;
          transform: translateY(-10px);

          .tooltip {
            opacity: 1;
            bottom: -70%;
          }
        }
      }
    }
  }

</style>
