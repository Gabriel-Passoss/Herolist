<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
      <div class="logo">
        <img src="../assets/marvel.png" alt="marvel logo">
      </div>

      <div class="input">
        <input type="text" placeholder="Find your hero :)">
      </div>
  </header>
</template>

<style scoped>
  header {
    width: 99vw;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: space-around;
    
    background-color: var(--header-bg);
    scroll-snap-align: center;
    box-shadow: 0 1.5px black;
    z-index: 2;
  }

  img {
    height: 13rem;
  }

  input {
    width: 16rem;
    height: 2rem;
    padding: 1rem;

    border-radius: 15px;
    background-color: var(--placeholder);
    font-family: 'Inter', sans-serif;
    font-weight: 100;
    color: #fff;
    border: 1px solid var(--placeholder);
    box-shadow: 0 1px black;
    transition: 0.4s
  }

  input:focus {
    border: 1.3px solid var(--placeholder-focus);
    outline: 0;
  }

  @media (min-width: 1080px) {
    header {
      max-width: calc(100vw - 17px);
    }
  }

</style>