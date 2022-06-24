<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img src="../assets/marvel.png" alt="marvel logo">
      </div>

      <div class="input">
        <input type="text" placeholder="Find your hero :)">
      </div>
    </nav>
  </header>
</template>

<style scoped>
  header {
    width: 100vw;
    height: 5rem;

    display: flex;
    align-items: center;
    
    background-color: var(--header-bg);
    scroll-snap-align: start;
    position: fixed;
    box-shadow: 0 1.5px black;
  }

  nav {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;

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