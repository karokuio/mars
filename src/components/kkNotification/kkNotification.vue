<template lang='pug'>
  transition(name='fade')
    .notification.message(
      v-show= 'show'
      v-bind:class='type'
    )
        button.close.ion-android-close(
          alt=''
          type='button'
          v-on:click='close()'
        )
        h3.header(v-show='title') {{ title }}
        p.message {{ msg }}
</template>

<script>
  import EventBus from '@/bus'

  const TYPES = ['info', 'success', 'warning', 'error']

  export default {
    name: 'kkNotification',
    data () {
      return {
        title: undefined,
        msg: undefined,
        type: 'warning',
        show: false
      }
    },
    created () {
      EventBus.$on('notification', ({ title, msg, type = 'warning' }) => {
        if (TYPES.includes(type.toLowerCase())) {
          this.type = type.toLowerCase()
        }

        this.title = title
        this.msg = msg

        this.show = true

        window.setTimeout(this.close, 5000)
      })
    },
    methods: {
      show () {
        this.show = true
      },
      close () {
        this.show = false
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .notification {
    position: relative;

    padding: 1rem;
    margin: 1rem;

    font-size: .7rem;

    & .close {
      cursor: pointer;
      position: absolute;
      margin: 0;
      top: .5rem;
      right: .5rem;
      opacity: .7;
      transition: opacity .1s ease;
      font-size: 1rem;
    }

    & .header {
      font-size: .8rem;
      font-weight: 700;
    }

    & .message {
      margin-top: .5rem
    }

    &.info,
    &.success,
    &.warning,
    &.error {
      display: block;
      border-radius: 5px;
    }

    &.info {
      background-color: color(var(--color-info) alpha(30%));
      border: 1px solid color(var(--color-info) blackness(20%));
      color: color(var(--color-info) blackness(20%));

      & .close {
        color: color(var(--color-info) blackness(20%));
      }
    }

    &.success {
      background-color: color(var(--color-success) alpha(30%));
      border: 1px solid color(var(--color-success) blackness(20%));
      color: color(var(--color-success) blackness(20%));

      & .close {
        color: color(var(--color-success) blackness(20%));
      }
    }

    &.warning {
      background-color: color(var(--color-warning) alpha(30%));
      border: 1px solid color(var(--color-warning) blackness(20%));
      color: color(var(--color-warning) blackness(20%));

      & .close {
        color: color(var(--color-warning) blackness(20%));
      }
    }

    &.error {
      background-color: color(var(--color-danger) alpha(30%));
      border: 1px solid color(var(--color-danger) blackness(20%));
      color: color(var(--color-danger) blackness(20%));

      & .close {
        color: color(var(--color-danger) blackness(20%));
      }
    }
  }
</style>
