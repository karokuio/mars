<template lang='pug'>
  .nodes
    h2.nodes-title
      .title Nodes
      .badge {{ nodes.length || 0 }}
    .no-nodes(v-if='!nodes.length')
      p No Nodes
    .node(
      v-else
      v-for='node in nodes'
    )
      .node-info
        | Name:&nbsp;
        strong {{ node.name }}
        .node-type
          | Scope:&nbsp;
          strong {{ node.scope }}
      ul.node-cell(v-if='node.containers.length')
        li(v-for='container in node.containers') {{ container.Name }}
      .node-cell(v-else) No nodes
</template>

<script>
  export default {
    name: 'kkVolumes',
    props: {
      nodes: {
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

  .nodes {
    & .no-nodes {
      font-size: 1.3rem;
      font-weight: 600;
      text-align: center;
      width: 100%;
      text-transform: uppercase;
      letter-spacing: .05rem;
      margin-top: 3rem;
    }

    & .nodes-title {
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

    & .node {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;

      margin: .5rem 0 1rem 0;
    }

    & .node-type {
      margin-left: .5rem;
      padding-top: .3rem;
      font-size: .6rem;
    }
  }
</style>
