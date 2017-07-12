<template lang='pug'>
  .menu
    kkLogo
    nav.items
      ul
        li.item
          a(href='') Item 1
        li.item
          a(href='') Item 2
        li.item
          a(href='') Item 3
</template>

<script>
  import kkLogo from '#/kkLogo/kkLogo'

  export default {
    name: 'kkMenu',
    components: {
      kkLogo
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
