<template>
  <div class="projects-page">
    <TopNav />
    <div class="projects-wrap">
      <div class="icon_header animated zoomIn">
        <span class="flaticon-projects"></span>
      </div>
      <h1 class="animated zoomIn">Projects</h1>

      <div class="projects">

        <router-link v-for="(item, index) in portfolio" :to="'/project/'+item.slug" class="animated zoomIn">
          <div class="project">
            <div class="hover">
              <h4>{{ item.name }}</h4>
              <h5>{{ item.type }}</h5>
            </div>
            <img :src="item.main_photo" />
          </div>
        </router-link>

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
  name: 'projects',
  data () {
    return {
      portfolio: []
    }
  },
  created: function () {
    this.$http.get('../../static/portfolio.json').then((response) => {
      this.portfolio = response.body.portfolio
    }, (response) => {
      console.log(response)
    })
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/vars.scss';
  @import '../scss/mixins.scss';

  .projects-page {
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

    .projects-wrap {
      width: 85%;
      text-align: center;

      .projects {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-top;

        a {
          transition: 0.3s;
          animation-duration: 0.5s;
          animation-delay: 0.4s;
          width: 100%;
          max-width: 350px;
          margin: 20px;

          @for $i from 1 through 20 {
            &:nth-child(#{$i}) {
              animation-delay: 0.5s + (0.1 * $i);
            }
          }
        }

        .project {
          max-width: 350px;
          width: 100%;
          padding-top: 75%;
          position: relative;
          border-radius: 20px;
          overflow: hidden;

          @include long-boxshadow;

          color: #fff;
          line-height: 0;
          transition: 0.3s;

          img {
            width: 150%;
            height: auto;
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%) scale(1);
            transition: transform 3s;
          }
          .technologies {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            background: white;
            color: black;
            font-size: 26px !important;
            padding: 10px;
            box-shadow: 0 -2px 25px rgba(0,0,0,.15);
          }

          .hover {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            align-content: center;
            justify-content: center;
            flex-wrap: wrap;
            opacity: 0;
            transition: 0.4s;
            line-height: 1;
            z-index: 1;

            h4 {
              font-size: 36px;
              font-weight: 200;
              margin: 0;
              padding: 0 10px;
              width: 100%;
            }

            h5 {
              font-size: 20px;
              font-weight: 300;
              margin: 10px 0 0;
              width: 100%;
            }
          }

          &:hover {
            cursor: pointer;

            @include longer-boxshadow;

            img {
              transform: translateX(-50%) scale(1.15);
            }

            .hover {
              opacity: 1;

              h4 {
                animation: fadeInDown 0.3s;
              }

              h5 {
                animation-delay: 0.2s;
                animation: fadeInDown 0.3s;
              }
            }
          }
        }
      }
    }

    h1 {
      text-align: center;
      display: block;
      width: 100%;
      margin: 0px 0 15px;
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
      font-size: 28px;
      font-weight: 200;
      width: 100%;
      text-align: center;
      letter-spacing: 0.5px;
      margin: 0;

      &:after {
        display: block;
        content: "";
        background-color: rgba(255, 255, 255, 0.5);
        width: 15px;
        height: 1px;
        margin: 15px auto 10px;
      }
    }

    p {
      width: 100%;
      margin: 0 auto 10px;
      font-size: 18px;
      letter-spacing: 0.5px;
      line-height: 1.5;
      font-weight: 400;
      animation-duration: 0.5s;
      animation-delay: 0.4s;

      &.lead {
        width: 100%;
        max-width: 350px;
        display: block;
        margin: 0 auto;
        text-align: justify;
      }
    }
  }

</style>
