<template lang='pug'>
  .containers
    h2.containers-title Containers
    .container(v-for='container in containers')
      .container-info
        div {{ name(container.names) }}
        .container-type
          | Type:&nbsp;
          strong {{ container.image }}
      .container-cell {{ container.status }}
      .container-cell
        .container-state(v-bind:class='container.state') {{ container.state }}
        ul.container-actions
          li.container-action
            a.ion-eye(href='')
          li.container-action
            a.ion-gear-b(href='')
          li.container-action
            a.ion-trash-b(href='')
</template>

<script>
  export default {
    name: 'kkContainers',
    props: {
      containers: {
        type: Array,
        default: undefined,
        required: false
      }
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

  .containers {
    & .containers-title {
      padding-bottom: .5rem;
      margin-bottom: 1rem;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;

      border-bottom: 1px solid color(var(--color-grey) blackness(30%));
    }

    & .container-type {
      margin-left: .5rem;
    }

    & .container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      margin: .5rem 0 1rem 0;
    }

    & .container-cell {
      display: flex;
      padding: 0;
      box-sizing: border-box;
      overflow: hidden;
    }

    & .container-cell,
    & .container-actions {
      margin-left: 1rem;
    }

    & .container-info {
      flex-grow: 1;

      & .container-type {
        padding-top: .3rem;
      }
    }

    & .container-actions {
      display: flex;
      flex-direction: row;
      align-items: center;


      & .container-action {
        margin-left: .5rem;

        & a {
          font-size: 1.2rem;
          color: var(--color-blue);
        }
      }
    }

    & .container-state {
      display: flex;
      align-items: center;

      padding: .1rem .3rem;

      color: var(--color-white);
      font-weight: 600;

      letter-spacing: .5px;
      border-radius: 3px;

      &.created {
        background-color: var(--color-info);
        border: 1px solid color(var(--color-info) blackness(20%));
      }

      &.running {
        background-color: var(--color-success);
        border: 1px solid color(var(--color-success) blackness(20%));
      }

      &.paused {
        background-color: var(--color-grey);
        border: 1px solid color(var(--color-grey) blackness(20%));
      }

      &.restarting {
        background-color: var(--color-warning);
        border: 1px solid color(var(--color-warning) blackness(20%));
      }

      &.exited {
        background-color: var(--color-danger);
        border: 1px solid color(var(--color-danger) blackness(20%));
      }

      &.dead,
      &.removing {
        background-color: var(--color-bad);
        border: 1px solid color(var(--color-bad) blackness(20%));
      }
    }
  }
</style>
