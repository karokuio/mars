<template lang='pug'>
  .admin
    .navigation
      kkMenu
    main.container
      aside.header
        kkContact
      aside
        kkNotification
      section.dashboard
        kkCard(size='big')
          kkContainers(v-bind:containers='containers')
        kkCard(size='big')
          kkImages(v-bind:images='images')
</template>

<script>
  import kkMenu from '#/kkMenu/kkMenu'
  import kkContact from '#/kkContact/kkContact'
  import kkCard from '#/kkCard/kkCard'
  import kkContainers from '#/kkContainers/kkContainers'
  import kkImages from '#/kkImages/kkImages'
  import kkNotification from '#/kkNotification/kkNotification'

  import { containersService, imagesService } from '@/api'

  export default {
    name: 'kkAdmin',
    data () {
      return {
        containers: [],
        images: []
      }
    },
    components: {
      kkMenu,
      kkContact,
      kkCard,
      kkContainers,
      kkImages,
      kkNotification
    },
    created () {
      containersService.list()
        .then(containers => {
          this.containers = containers
        })

      imagesService.list()
        .then(images => {
          console.log('images', images)
          this.images = images
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
