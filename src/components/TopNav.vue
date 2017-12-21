<template>
  <div :class="top ? 'top-nav darken' : 'top-nav'" ref="topNav">
    <router-link to="/" class="home-link"><i class="flaticon-home"></i></router-link>
    <div class="title">
      lewj
    </div>
    <div class="top-right-nav">
      <router-link to="/about"><i class="flaticon-about"></i> <span>About</span></router-link>
      <router-link to="/projects"><i class="flaticon-projects"></i> <span>Projects</span></router-link>
      <router-link to="/hire"><i class="flaticon-email"></i> <span>Hire Me</span></router-link>
    </div>
    <div class="top-right-nav-mob">
      <button class="mob-nav-btn" v-on:click="mobNavToggle"><i class="flaticon-menu"></i></button>
    </div>
    <div class="mob-nav" v-bind:class="{ active: mobNav }">
      <button class="mob-close" v-on:click="mobNavToggle"><i class="flaticon-close"></i></button>
      <router-link to="/about" class="animated" v-bind:class="{ zoomIn: mobNav }">About</router-link>
      <router-link to="/projects" class="animated" v-bind:class="{ zoomIn: mobNav }">Projects</router-link>
      <router-link to="/hire" class="animated" v-bind:class="{ zoomIn: mobNav }">Hire Me</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNav',
  data () {
    return {
      currentRoute: this.$route.path,
      aboutTrue: this.$route.path === '/about',
      mobNav: false,
      top: false
    }
  },
  methods: {
    mobNavToggle: function () {
      this.mobNav = !this.mobNav
    },
    changeColour: function () {
      if (window.scrollY > 12) {
        this.top = true
      } else {
        this.top = false
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.changeColour)
  }
}
</script>

<style lang="scss" scoped>
  @import '../scss/vars.scss';

  .top-nav {
    position: fixed;
    z-index: 10000;
    display: block;
    height: 75px;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0);
    transition: background 0.15s;

    &.darken {
      background: rgba(0, 0, 0, 0.65);
    }

    .title {
      font-family: $font1;
      font-size: 32px;
      position: fixed;
      top: 18px;
      left: 70px;
    }

    .top-right-nav {
      display: none;
      position: fixed;
      right: 20px;
      top: 30px;
      height: 38px;
      z-index: 10000;

      a {
        color: #fff;
        border: 1px solid #fff;
        padding: 7px 12px;
        margin-right: 10px;
        text-decoration: none;
        border-radius: 3px;
        transition: 0.2s;
        text-transform: uppercase;
        font-size: 14px;

        span {
          display: inline-block;
          vertical-align: middle;
        }
        i {
          display: inline-block;
          vertical-align: sub;
          height: 23px;
          margin-right: 2px;
        }

        &:hover {
          border: 1px solid rgba(0, 0, 0, 0.7);
          color: rgba(0, 0, 0, 0.7);
        }

        &:last-child {
          margin-right: 0;
        }

        &.router-link-active {
          border: 1px solid rgba(0, 0, 0, 0.7);
          color: rgba(0, 0, 0, 0.7);
        }
      }

      @media screen and (min-width: 800px) {
        display: block;
      }
    }

    &.darken {
      .top-right-nav {
        a {
          &.router-link-active {
            color: $third;
            border: 1px solid $third;
          }
        }
      }
    }

    .top-right-nav-mob {
      display: none;
      position: fixed;
      right: 20px;
      top: 20px;
      height: 38px;
      z-index: 10000;

      .mob-nav-btn {
        background: none;
        border: 1px solid #fff;
        border-radius: 3px;
        color: #fff;
        padding: 1px 0 0;
        height: 35px;
        width: 35px;
        transition: 0.3s;

        i {
          &:before {
            font-size: 22px;
          }
        }

        &:hover {
          cursor: pointer;
          border: 1px solid rgba(0, 0, 0, 0.7);
          color: rgba(0, 0, 0, 0.7);
        }

        &:focus {
          outline: 0;
        }
      }

      @media screen and (max-width: 799px) {
        display: block;
      }
    }

    .mob-nav {
      background-color: rgba(0, 0, 0, 0.8);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 20000;
      display: flex;
      justify-content: center;
      align-content: center;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0;
      pointer-events: none;
      transition: 0.3s;

      &.active {
        pointer-events: auto;
        opacity: 1;
      }

      .mob-close {
        background: none;
        border: 0;
        color: #fff;
        position: absolute;
        top: 11px;
        right: 12px;
        width: 50px;
        height: 50px;
        padding: 0;

        i {
          &:before {
            font-size: 24px;
          }
        }

        &:hover {
          cursor: pointer;
        }

        &:focus {
          outline: none;
        }
      }

      a {
        color: #fff;
        text-decoration: none;
        display: block;
        width: 100%;
        text-align: center;
        padding: 20px;
        font-size: 42px;
        font-weight: 500;
        transition: 0.3s;
        text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.6);
        animation-duration: 0.5s;

        &:hover {
          color: $secondary;
        }

        &.router-link-active {
          color: $third;
        }

        &:nth-child(3) {
          animation-delay: 0.05s;
        }

        &:nth-child(4) {
          animation-delay: 0.1s;
        }
      }
    }

    .home-link {
      position: fixed;
      color: #fff;
      left: 20px;
      top: 15px;
      font-size: 36px;
      transition: 0.2s;
      z-index: 10000;
      text-decoration: none;

      i {
        &:before {
          font-size: 32px;
        }
      }

      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
  }
</style>
