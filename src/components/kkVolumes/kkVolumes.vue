<template lang='pug'>
  .volumes
    h2.volumes-title
      .title Volumes
      .badge {{ volumes.length || 0 }}
    .no-volumes(v-if='!volumes.length')
      p No Volumes
    .volume(
      v-else
      v-for='volume in volumes'
    )
      .volume-info
        | Name:&nbsp;
        strong {{ volume.name }}
        .volume-type
          | Scope:&nbsp;
          strong {{ volume.scope }}
      ul.volume-cell(v-if='volume.containers.length')
        li(v-for='container in volume.containers') {{ container.Name }}
      .volume-cell(v-else) No containers
</template>

<script>
  export default {
    name: 'kkVolumes',
    props: {
      volumes: {
        type: Array,
        default: [],
        required: false
      }
    },
    methods: {
    }
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .volumes {

    & .no-volumes {
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: .05rem;
      margin-top: 3rem;
    }

    & .volumes-title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      padding-bottom: .5rem;
      margin-bottom: 1rem;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;

      border-bottom: 1px solid color(var(--color-grey) blackness(30%));

      & .badge {
        width: 1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .6rem;
        background: var(--color-info);
        color: var(--color-white);
        border: 1px solid color(var(--color-info) blackness(30%));
        box-shadow: 0 0 0 2px color(var(--color-info) alpha(40%));
        border-radius:50%;
      }
    }

    & .volume {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      margin: .5rem 0 1rem 0;
    }

    & .volume-type {
      margin-left: .5rem;
      padding-top: .3rem;
      font-size: .6rem;
    }
  }
</style>
