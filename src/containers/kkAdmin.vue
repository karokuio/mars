<template lang='pug'>
  .admin
    .navigation
      kkMenu
    main.container
      aside.header
        kkContact
      section.dashboard
        kkCard(size='big')
          kkContainers(v-bind:containers='containers')
</template>

<script>
  import kkMenu from '#/kkMenu/kkMenu'
  import kkContact from '#/kkContact/kkContact'
  import kkCard from '#/kkCard/kkCard'
  import kkContainers from '#/kkContainers/kkContainers'

  import { containersService } from '@/api'

  export default {
    name: 'kkAdmin',
    data () {
      return {
        containers: []
      }
    },
    components: {
      kkMenu,
      kkContact,
      kkCard,
      kkContainers
    },
    created () {
      containersService.list()
        .then(containers => {
          console.log('containers', containers)
          this.containers = containers
        })
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';

  .admin {
    display: flex;
    flex-direction: row;

    & .navigation {
      position: fixed;
      z-index: 100;
      top: 0;
      left: 0;

      width: 15rem;
      height: 100%;
    }

    & .container {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding-left: 15rem;
    }

    & .header {
      display: flex;
      justify-content: flex-end;

      background-color: var(--color-white);
      border-bottom: 1px solid color(var(--color-white) blackness(5%));
    }

    & .dashboard {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;

      padding: 1rem;
    }
  }
</style>
