<script setup>
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <nav>
      <a href="#" target="_blank"><img src="../assets/logo/favicon.jpg" class="profile-image" alt="Logo Nemanja Stojanović" /></a>
      <ul>
        <li>
          <RouterLink to="/">Početna</RouterLink>
        </li>
        <li>
          <RouterLink to="/Kontakt">Kontakt</RouterLink>
        </li>
        <li>
          <RouterLink to="/Obrazovanje i edukacija">Obrazovanje i edukacija</RouterLink>
        </li>
        <li>
          <RouterLink to="/Projekti">Projekti</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  background-color: #3772b1;
  padding: 15px 0;
  -webkit-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.41);
  font-family: 'Ubuntu', serif;
  font-size: 20px;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15x;
    width: 80%;
    margin: 0 auto;
    
    img {
      transition: all 0.1s ease-in-out;
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      gap: 25px;
      li {
        transition: all 0.1s ease-in-out;
        span {
          color: white;
        }
        a {
          display: inline-block;
          color: white;
          text-decoration: none;
        }
      }
    }
  }
}
li:hover {
  cursor: pointer;
  transform: scale(1.1);
}
img:hover {
  cursor: pointer;
  transform: scale(1.1);
}
img.profile-img {
  height: 20px;
}

</style>
