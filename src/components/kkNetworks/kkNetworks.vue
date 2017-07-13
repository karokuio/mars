<template lang='pug'>
  .networks
    h2.networks-title
      .title Networks
      .badge {{ networks.length }}
    .networks.no-networks(v-if='!networks.length')
      p No Networks
    .network(
      v-else
      v-for='network in networks'
    )
      .network-info
        | Name:&nbsp;
        strong {{ network.name }}
        .network-type
          | Scope:&nbsp;
          strong {{ network.scope }}
      ul.network-cell(v-if='network.containers.length')
        li(v-for='container in network.containers') {{ container.Name }}
      .network-cell(v-else) No containers
</template>

<script>
  export default {
    name: 'kkNetworks',
    props: {
      networks: {
        type: Array,
        default: undefined,
        required: false
      }
    },
    methods: {
    }
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .networks {
    & .no-networks {
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: .05rem;
      margin-top: 3rem;
    }

    & .networks-title {
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

    & .network {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      margin: .5rem 0 1rem 0;
    }

    & .network-type {
      margin-left: .5rem;
      padding-top: .3rem;
      font-size: .6rem;
    }
  }
</style>
