<script>
export default {
  data() {
    return {
      options: [
        { label: 'Projekti', value: 'option1' },
        { label: 'Vremenska prognoza', value: 'option3' },
        { label: 'Todo list', value: 'option3' }
      ],
      selectedOption: 'option1'
    }
  }
}
</script>

<template>
  <header>
    <nav>
      <a href="#" target="_blank"><img src="../assets/logo/favicon.jpg" class="profile-image" alt="Logo Nemanja Stojanović" /></a>
      <ul>
        <li>
          <a aria-current="page" href="#">Kontakt</a>
        </li>
        <li>
          <a href="#">Obrazovanje i edukacija</a>
        </li>
        <li>
          <div class="dropdown">
            <select id="dropdown" v-model="selectedOption">
              <option value="">Projekti</option>
              <option v-for="option in options" :value="option.value">{{ option.label }}</option>
            </select>
          </div>
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
  padding: 10px;
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

.dropdown {
  position: relative;
  display: inline-block;
  select {
    background-color: #3772b1;
    border: none;
    color: white;
    font-size: 20px;
  }
}
.dropdown:hover {
  display: flex;
  color: blue;
}
</style>
