<template lang='pug'>
  transition(name='fade')
    .modal(
      v-show= 'show'
    )
      .modal-content
        header Header
        .text Text
</template>

<script>
  import EventBus from '@/bus'

  export default {
    name: 'kkModal',
    data () {
      return {
        title: undefined,
        msg: undefined,
        show: false
      }
    },
    created () {
      EventBus.$on('modal', ({ title, msg }) => {
        this.title = title
        this.msg = msg

        this.open()
      })
    },
    methods: {
      open () {
        this.show = true
      },
      close () {
        console.log('casa')
        this.show = false
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .modal {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    display: flex;
    align-items: center;

    width: 100%;
    height: 100%;

    text-align: center;
    line-height: 1;

    vertical-align: middle;
    background-color: color(var(--color-black) alpha(60%));
    user-select: none;

    will-change: opacity;

    & .modal-content {
      margin: 0 auto;
      padding: 1.5rem;
      width: 40rem;

      background-color: var(--color-white);

      border-radius: .3rem;
      border-radius: .3rem;
    }
  }
</style>
