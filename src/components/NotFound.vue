<template>
  <div class="about">
    <TopNav />
    <div class="about-wrap">
      <div class="icon_header animated zoomIn">
        <span class="lnr lnr-warning"></span>
      </div>
      <h1 class="animated zoomIn">404 Page Not Found</h1>
      <p class="animated fadeIn">
        Uh oh! I couldn't seem to find the page you were looking for!
      </p>
      <p class="animated fadeIn">
        <router-link to="/">Click here</router-link> to return back home.
      </p>
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
  name: 'NotFound',
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

    @media screen and (max-width: 800px) {
      padding-top: 75px;
    }

    .icon_header {
      font-size: 56px;
      text-align: center;
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
      margin: 0 auto 15px;
      font-size: 18px;
      letter-spacing: 1.9px;
      line-height: 1.8;
      font-weight: 300;
      animation-delay: 0.4s;
      animation-duration: 0.5s;
      text-align: center;

      a {
        color: #fff;
        display: inline-block;
        text-decoration: none;
        border-bottom: 1px solid #fff;
        transition: 0.3s;

        &:hover {
          color: rgba(0, 0, 0, 0.7);
          border-bottom: 1px solid rgba(0, 0, 0, 0.7);
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

      &.delay {
        animation-delay: 0.8s;
      }

      i {
        margin: 0 5px 35px;
        position: relative;
        transition: 0.2s;
        animation-delay: 0.6s;

        &:nth-child(1) {
          animation-delay: 0.7s;
        }

        &:nth-child(2) {
          animation-delay: 0.75s;
        }

        &:nth-child(3) {
          animation-delay: 0.8s;
        }

        &:nth-child(4) {
          animation-delay: 0.85s;
        }

        &:nth-child(5) {
          animation-delay: 0.9s;
        }

        &:nth-child(6) {
          animation-delay: 0.95s;
        }

        &:nth-child(7) {
          animation-delay: 1s;
        }

        &:nth-child(8) {
          animation-delay: 1.05s;
        }

        &:nth-child(9) {
          animation-delay: 1.1s;
        }

        &:nth-child(10) {
          animation-delay: 1.15s;
        }

        &:nth-child(11) {
          animation-delay: 1.2s;
        }

        &:nth-child(12) {
          animation-delay: 1.25s;
        }

        &:nth-child(13) {
          animation-delay: 1.3s;
        }

        &:nth-child(14) {
          animation-delay: 1.35s;
        }

        &:nth-child(15) {
          animation-delay: 1.4s;
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
