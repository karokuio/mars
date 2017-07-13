<template lang='pug'>
  .images
    h2.images-title Images
    .image(v-for='image in images')
      .images-tag(v-for='tag in image.repotags')
        strong {{ tag }}
      .image-size {{ size(image.size) }}
      .image-created {{ created(image.created) }}
      ul.image-actions
        li.image-action
          button.ion-gear-b(
            alt=''
            type='button'
            v-on:click=''
          )
        li.image-action
          button.ion-trash-b(
            alt=''
            type='button'
            v-on:click='remove(image.id)'
          )
</template>

<script>
  import moment from 'moment'
  import EventBus from '@/bus'

  import { imagesService } from '@/api'

  export default {
    name: 'kkImages',
    props: {
      images: {
        type: Array,
        default: undefined,
        required: false
      }
    },
    methods: {
      size (size) {
        for (var i = 0; size >= 1024 && i < 4; i++) {
          size = size / 1024
        }
        const MEASURE = ['Bytes', 'KB', 'MB', 'GB', 'TB'][i]
        return `${size.toFixed(2)} ${MEASURE}`
      },
      created (size) {
        return moment.unix(size).fromNow()
      },
      remove (imageID) {
        imagesService.remove(imageID)
          .then(data => EventBus.$emit('notification', {
            title: `Image ${imageID} removed`,
            msg: 'Image removed successfully',
            type: 'success'
          }))
          .catch(err => EventBus.$emit('notification', {
            title: `Image ${imageID} not deleted`,
            msg: err.message,
            type: 'error'
          }))
      }
    }
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .images {

    & .images-title {
      padding-bottom: .5rem;
      margin-bottom: 1rem;
      font-size: .8rem;
      font-weight: 700;
      text-transform: uppercase;

      border-bottom: 1px solid color(var(--color-grey) blackness(30%));
    }

    & .image {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      text-align: left;
      margin: .5rem 0 1rem 0;
    }

    & .image-actions {
      display: flex;
      flex-direction: row;
      align-items: center;


      & .image-action {
        margin-left: .5rem;

        & button {
          font-size: 1.2rem;
          color: var(--color-blue);
        }
      }
    }
  }
</style>
