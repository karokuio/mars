<template lang='pug'>
  .admin
    .navigation(v-show='menuItems.length')
      kkMenu(v-bind:items='menuItems')
    main.container(v-bind:class='{ "no-navigation": !menuItems.length }')
      aside.header
        kkLogo(v-show='!menuItems.length')
        kkContact
      aside
        kkNotification
      section.dashboard
        kkCard(size='small')
          h2.small-title
            i.small-icon.ion-cube
            | Oldest Container
          .small-content
            h3 {{ oldest.name }}
          .small-footer
            p created at {{ createdAt(oldest.created) }}
        kkCard(size='small')
          h2.small-title
            i.small-icon.ion-ios-albums
            | Bigest Image
          .small-content
            h3 {{ bigest.tag }}
          .small-footer
            p with size {{ size(bigest.size) }}
        kkCard(size='small')
          h2.small-title
            i.small-icon.ion-ios-list-outline
            | Resume
          ul.small-content.small-list
            li.item
              p {{ system.ContainersRunning }}
              span.info.running Running
            li.item
              p {{ system.ContainersStopped }}
              span.info.stopped Stopped
            li.item
              p {{ system.ContainersPaused }}
              span.info.paused Paused
        kkCard(size='small')
          h2.small-title
            i.small-icon.ion-flag
            | Version
          .small-content
            h3 {{ version }}
          .small-footer
            p installed on {{ OS }}

        kkCard(size='big')
          kkImages(v-bind:images='images')
        kkCard(size='big')
          kkContainers(v-bind:containers='containers')

        kkCard(size='medium')
          kkNetworks(v-bind:networks='networks')
        kkCard(size='medium')
          kkVolumes(v-bind:volumes='volumes')
        kkCard(size='medium')
          kkNodes(v-bind:nodes='nodes')
    kkModal
</template>

<script>
  import moment from 'moment'

  import kkMenu from '#/kkMenu/kkMenu'
  import kkLogo from '#/kkLogo/kkLogo'
  import kkContact from '#/kkContact/kkContact'
  import kkCard from '#/kkCard/kkCard'
  import kkContainers from '#/kkContainers/kkContainers'
  import kkImages from '#/kkImages/kkImages'
  import kkSystem from '#/kkSystem/kkSystem'
  import kkNetworks from '#/kkNetworks/kkNetworks'
  import kkVolumes from '#/kkVolumes/kkVolumes'
  import kkNodes from '#/kkNodes/kkNodes'

  import kkNotification from '#/kkNotification/kkNotification'
  import kkModal from '#/kkModal/kkModal'

  import {
    containersService,
    imagesService,
    systemService,
    networksService,
    volumesService,
    nodesService,
    eventsService
  } from '@/api'

  export default {
    name: 'kkAdmin',
    data () {
      return {
        containers: [],
        images: [],
        networks: [],
        volumes: [],
        nodes: [],
        system: {
          ContainersRunning: undefined,
          ContainersStopped: undefined,
          ContainersPaused: undefined
        },
        version: undefined,
        OS: undefined
      }
    },
    computed: {
      menuItems () {
        return this.containers.filter(item => item.state === 'exited')
      },
      oldest () {
        const oldest = this.containers.reduce(
          (acc, item) => {
            if (!Object.keys(acc).length) {
              return item
            }

            if (item.created === Math.min(acc.created, item.created)) {
              return item
            }

            return acc
          },
          {}
        )

        if (oldest.names) {
          return {
            name: oldest.names[0].substring(1),
            created: oldest.created
          }
        }

        return oldest
      },
      bigest () {
        const bigest = this.images.reduce(
          (acc, item) => {
            if (!Object.keys(acc).length) {
              return item
            }

            if (item.size === Math.max(acc.size, item.size)) {
              return item
            }

            return acc
          },
          {}
        )

        if (bigest.repotags) {
          return {
            tag: bigest.repotags[0],
            size: bigest.size
          }
        }

        return bigest
      }
    },
    components: {
      kkMenu,
      kkLogo,
      kkContact,
      kkCard,
      kkContainers,
      kkImages,
      kkNetworks,
      kkVolumes,
      kkNodes,
      kkSystem,
      kkNotification,
      kkModal
    },
    created () {
      containersService.list()
        .then(containers => {
          this.containers = containers
        })

      imagesService.list()
        .then(images => {
          this.images = images
        })

      systemService.info()
        .then(system => {
          this.system = system
        })

      systemService.version()
        .then(version => {
          this.version = version.Version
          this.OS = version.Os
        })

      networksService.list()
        .then(networks => {
          this.networks = networks
        })

      volumesService.list()
        .then(volumes => {
          this.volumes = volumes.Volumes || []
        })

      nodesService.list()
        .then(nodes => {
          this.nodes = nodes
        })

      eventsService.events()
        .then(events => console.log('events', events))
    },
    methods: {
      createdAt (value) {
        return moment.unix(value).fromNow()
      },
      size (size) {
        if (!size) {
          return false
        }

        for (var i = 0; size >= 1024 && i < 4; i++) {
          size = size / 1024
        }
        const MEASURE = ['Bytes', 'KB', 'MB', 'GB', 'TB'][i]
        return `${size.toFixed(2)} ${MEASURE}`
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../assets/css/colors.css';

  .admin {
    display: flex;
    flex-direction: row;

    & .logo {
      color: var(--color-hard-blue);
    }

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

      &.no-navigation {
        padding-left: 0;
      }
    }

    & .no-navigation .header {
      justify-content: space-between;
      align-items: center;
    }

    & .header {
      display: flex;
      justify-content: flex-end;
      padding: .5rem 1rem;

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

    & .small-title {
      display: flex;
      align-items: center;
      flex-direction: row;

      color: var(--color-black);
      font-size: .7rem;
      line-height: 1.3rem;
      font-weight: 600;
      text-transform: uppercase;
    }

    & .small-icon {
      font-size: 1rem;
      margin-right: .5rem;
    }

    & .small-content {
      & h3 {
        font-size: 1.5rem;
        line-height: 3.2rem;
        font-weight: 600;
        text-align: center;
        width: 100%;
      }

      &.small-list {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;

        & p {
          font-size: 1.5rem;
          line-height: 3rem;
          font-weight: 600;
        }

        & .info {
          &.running {
            color: var(--color-success);
          }
          &.paused {
            color: var(--color-info);
          }
          &.stopped {
            color: var(--color-warning);
          }
        }
      }
    }

    & .small-footer {
      & p {
        color: var(--color-success);
        font-size: .6rem;
        font-weight: 600;
        text-transform: uppercase;
        text-align: right;
      }
    }
  }
</style>
