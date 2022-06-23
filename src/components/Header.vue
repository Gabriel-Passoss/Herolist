<script>
export default {
  name: 'Header'
}
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <h3>Herolist</h3>
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
    position: fixed
  }

  nav {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  div#logo {
    height: 1.75rem;
    width: 6.75rem;
  }

  h3 {
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 2.2rem;
    color: var(--logo);
;
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
    transition: 0.4s
  }

  input:focus {
    border: 1px solid #641ff8;
    outline: 0;
  }

  @media (min-width: 1080px) {
    header {
      max-width: calc(100vw - 17px);
    }
  }

</style>