<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

let btntext = ref('MENI')
let ulList = ref(true)

const responsiveHeader = () => {
  if (btntext.value === 'MENI') {
    ulList.value = true
    btntext.value = 'ZATVORI'
  } else {
    ulList.value = false
    btntext.value = 'MENI'
  }
}
</script>

<template>
  <header>
    <nav>
      <a href="#" target="_blank"
        ><img src="../assets/logo/favicon.jpg" class="profile-image" alt="Logo Nemanja Stojanović"
      /></a>
      <button @click="responsiveHeader()">{{ btntext }}</button>
      <ul v-if="ulList">
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
    button {
      display: none;
      padding: 10px;
      color: white;
      cursor: pointer;
      font-weight: 700;
      font-size: 20px;
      letter-spacing: 3px;
      border-radius: 5px;
      border: none;
      background-color: #87acd4;
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      gap: 25px;
      z-index: 99;
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

@media (max-width: 1000px) {
  header nav button {
    display: block;
  }

  header nav ul {
    display: block;
    background-color: #3772b1;
    -webkit-box-shadow: -3px 3px 3px 0px rgba(0, 0, 0, 0.41);
    -moz-box-shadow: -3px 3px 3px 0px rgba(0, 0, 0, 0.41);
    box-shadow: -3px 3px 3px 0px rgba(0, 0, 0, 0.41);
    position: absolute;
    width: 100%;
    left: 0px;
    right: 0;
    top: 80px;
    padding: 15px;
  }
}
</style>
