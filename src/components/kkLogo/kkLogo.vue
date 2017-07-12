<template lang='pug'>
  h1.logo Karokuio
</template>

<script>
  export default {
    name: 'kklogo'
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .logo {
    color: var(--color-white);
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 4px;

    &:first-letter {
    }
  }
</style>
