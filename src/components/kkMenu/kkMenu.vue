<template lang='pug'>
  .menu
    kkLogo
    nav.items
      ul
        li.item(v-for='item in items')
          a(href='') {{ name(item.names) }}
</template>

<script>
  import kkLogo from '#/kkLogo/kkLogo'

  export default {
    name: 'kkMenu',
    props: {
      items: {
        type: Array,
        default: [],
        required: false
      }
    },
    components: {
      kkLogo
    },
    methods: {
      name (names) {
        return names[0].substring(1)
      }
    }
  }

</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .menu {
    height: 100%;

    background-color: var(--color-hard-blue);

    & a {
      color: var(--color-white);
    }

    & .logo {
      padding: 1.5rem;
    }

    & .no-items {
      margin-top: 2rem;
      text-align: center;
      font-size: 1rem;

      color: var(--color-white);

      & i {
        margin-left: .3rem;
      }
    }

    & .items {
      border-right: 1px solid color(var(--color-hard-blue) lightness(20%));

      & .item {
        padding: 1rem;
        font-size: .7rem;
        text-transform: uppercase;
        border-top: 1px solid color(var(--color-hard-blue) lightness(20%));

        &:last-child  {
          border-bottom: 1px solid color(var(--color-hard-blue) lightness(20%));
        }
      }
    }
  }
</style>
