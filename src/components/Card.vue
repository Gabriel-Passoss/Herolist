<script>
  export default {
    name: 'Card',
    data() {
      return {
      }
    },
    props: {
      hero: Object,
      heroImg: String,
    }
  }
</script>

<template>
  <main>
    <img :src="hero.thumbnail.path+'.'+hero.thumbnail.extension" alt="">
    <div>
      <h1>{{ hero.name }}</h1>
      <p>{{ hero.description }}</p>
    </div>

  </main>
</template>

<style scoped>
  .star {
  --star-color:orange;
  margin: 1em auto;
  font-size: 1em;
  position: relative;
  display: block;
  width: 0px;
  height: 0px;
  border-right: 1em solid transparent;
  border-bottom: 0.7em solid var(--star-color);
  border-left: 1em solid transparent;
  transform: rotate(35deg);
  }

  .star:before {
  border-bottom: 0.8em solid var(--star-color);
  border-left: 0.3em solid transparent;
  border-right: 0.3em solid transparent;
  position: absolute;
  height: 0;
  width: 0;
  top: -0.45em;
  left: -0.65em;
  display: block;
  content:"";
  transform: rotate(-35deg);
  }

  .star:after {
  position: absolute;
  display: block;
  top: 0.03em;
  left: -1.05em;
  width: 0;
  height: 0;
  border-right: 1em solid transparent;
  border-bottom: 0.7em solid var(--star-color);
  border-left: 1em solid transparent;
  transform: rotate(-70deg);
  content:"";
  }

  main {
    width: 100vw;
    height: calc(100vh - 80px);
    background-color: rgb(32, 32, 32);

    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: start;
  }

  img {
    margin-top: 5.5rem;
    height: 35rem;
    width: 35rem;
    border-radius: 20px;
    max-width: 35rem;
    max-height: 35rem;
  }

  div {
    width: 40rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4.3rem;
    color: var(--title);

    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    text-shadow: 0 4px 0 black;
    border-bottom: 1px solid #fff;
  }

  p {
    font-family: 'Inter', sans-serif;
    font-size: 1.1rem;
    color: var(--description);
    text-align: center;
    text-shadow: 0 1px 0 black;
  }
  
  @media (max-width: 1080px) {
    main {
      height: calc(100vh - 70px);
    }

    img {
      max-height: 370px;
    }
  }

  @media (min-width: 1080px) {
    main {
      flex-direction: row;
      align-items: center;
      justify-content: center;
      max-width: calc(100vw - 18px);
    }

    img {
      margin-right: 8rem;
    }
  }
</style>