<template>
  <div class="home">
    <div class="header">
      <div class="title-wrap">
        <h1 class="animated zoomIn">lewj</h1>
        <h2 class="animated zoomIn">Front-End Developer</h2>
        <router-link to="/about" class="nav-link animated zoomIn"><i class="flaticon-about"></i> <span>About</span></router-link>
        <router-link to="/projects" class="nav-link animated zoomIn"><i class="flaticon-projects"></i> <span>Projects</span></router-link>
        <router-link to="/hire" class="nav-link animated zoomIn"><i class="flaticon-email"></i> Hire Me</router-link>
        <div class="social">
          <a href="https://dribbble.com/LewJ" rel="noopener noreferrer" target="_blank" class="animated zoomIn"><i class="flaticon-dribbble" aria-hidden="true"></i></a>
          <a href="https://github.com/lewjuh" rel="noopener noreferrer" target="_blank" class="animated zoomIn"><i class="flaticon-github" aria-hidden="true"></i></a>
          <a href="https://codepen.io/lewj/" rel="noopener noreferrer" target="_blank" class="animated zoomIn"><i class="flaticon-codepen" aria-hidden="true"></i></a>
          <a href="https://twitter.com/lewjuh" rel="noopener noreferrer" target="_blank" class="animated zoomIn"><i class="flaticon-twitter" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import Footer from './Footer'
Vue.component('Footer', Footer)

export default {
  name: 'home',
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../scss/vars.scss';

  .header {
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 100vh;
    padding-bottom: 75px;

    .title-wrap {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 530px;

      @media screen and (max-width: 540px) {
        min-width: 445px;
      }

      @media screen and (max-width: 495px) {
        min-width: 365px;
      }

      @media screen and (max-width: 385px) {
        min-width: 285px;
      }

      h1 {
        margin: 0;
        font-family: $font1;
        font-size: 92px;
        width: 150px;
        animation-duration: 0.5s;

        @media screen and (max-width: 540px) {
          font-size: 64px;
        }

        @media screen and (max-width: 385px) {
          font-size: 56px;
        }
      }

      h2 {
        font-weight: 200;
        font-size: 56px;
        padding: 0;
        margin: 0 0 15px;
        animation-duration: 0.5s;
        animation-delay: 0.2s;

        @media screen and (max-width: 540px) {
          font-size: 48px;
        }

        @media screen and (max-width: 495px) {
          font-size: 38px;
        }

        @media screen and (max-width: 385px) {
          font-size: 32px;
        }
      }

      .nav-link {
        font-family: $font2;
        display: inline-block;
        border: 1px solid #fff;
        padding: 12px 20px;
        color: #fff;
        text-decoration: none;
        margin-left: 4px;
        margin-right: 6px;
        font-weight: 300;
        font-size: 16px;
        letter-spacing: 1px;
        border-radius: 3px;
        transition: 0.2s;
        animation-duration: 0.5s;
        animation-delay: 0.3s;
        text-transform: uppercase;

        span {
          display: inline-block;
          vertical-align: middle;
        }

        i {
          display: inline-block;
          vertical-align: middle;
          height: 23px;
          margin-right: 2px;
        }

        @for $i from 1 through 20 {
          &:nth-child(#{$i}) {
            animation-delay: 0.3s + (0.1 * $i);
          }
        }

        &:hover {
          background: #fff;
          color: $secondary;
          font-weight: 300;
        }

        @media screen and (max-width: 495px) {
          font-size: 14px;
          padding: 10px 15px;
          margin-left: 4px;
          margin-right: 4px;
          margin-bottom: 12px;
        }

        @media screen and (max-width: 385px) {
          font-size: 14px;
          padding: 8px 8px;
        }
      }

      .social {
        display: block;
        width: 100%;
        padding-top: 15px;

        @media screen and (max-width: 495px) {
          padding-top: 5px;
        }

        a {
          color: #fff;
          vertical-align: top;
          display: inline-block;
          line-height: 50px;
          text-align: center;
          margin-right: 15px;
          text-decoration: none;
          transition: color 0.15s;

          i {
            &:before {
              font-size: 28px;
            }
          }

          &:hover {
            color: $third;
          }

          &:first-child {
            margin-left: 4px;
          }

          @for $i from 1 through 5 {
            &:nth-child(#{$i}) {
              animation-delay: 0.7s + (0.1 * $i);
            }
          }

          .ion-social-github {
            font-size: 31px;
          }
        }
      }
    }
  }
</style>
