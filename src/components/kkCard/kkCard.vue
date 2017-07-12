<template lang='pug'>
  .card(v-bind:class='`card-${size}`')
    slot
</template>

<script>
  const SIZES = ['small', 'medium', 'big', 'super']
  export default {
    name: 'kkCard',
    props: {
      size: {
        type: String,
        default: 'small',
        validator (value) {
          return SIZES.includes(value.toLowerCase())
        },
        required: false
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  :root {
    --space: 10px;
  }

  .card {
    padding: 1.2rem 1.2rem .9rem;
    margin-bottom: 1rem;

    max-width: 100%;

    font-size: .7rem;
    font-weight: 400;

    background: var(--color-white);
    border: 1px solid color(var(--color-grey) blackness(30%));
    border-radius: .5rem;

    &.card-small {
      flex-basis: calc(25% - var(--space));
      max-width: calc(25% - var(--space));
    }

    &.card-medium {
      flex-basis: calc(33.333333% - var(--space));
      max-width: calc(33.333333% - var(--space));
    }

    &.card-big {
      flex-basis: calc(50% - var(--space));
      max-width: calc(50% - var(--space));
    }

    &.card-super {
      flex-grow: 1;
      max-width: 100%;
    }
  }
</style>
