<template lang='pug'>
  .contact
    .contact-photo
      img.contact-image(
        src='../../assets/images/user.jpg'
        alt='John Doe'
      )
    .contact-data
      .contact-name John Doe
      .contact-email jhondoe@jhony.com
</template>

<script>
  export default {
    name: 'kkContact'
  }
</script>

<style lang='css' scoped>
  @import '../../assets/css/colors.css';

  .contact {
    display: flex;
    flex-direction: row;

    padding: .5rem;

    & .contact-photo {
      padding-right: 1rem;
      & .contact-image {
        width: 2.5rem;
        border: 1px solid color(var(--color-white) blackness(30%));
        border-radius: 50%;
      }
    }

    & .contact-data {
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      & .contact-name {
        font-size: .8rem;
        font-weight: 700;
      }

      & .contact-email {
        font-size: .7rem;
      }
    }
  }
</style>
