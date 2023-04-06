<script>
export default {
  data() {
    return {
      options: [
        { label: 'Projekti', value: 'option1' },
        { label: 'Vremenska prognoza', value: 'option3' },
        { label: 'Todo list', value: 'option3' },
      ],
      selectedOption: 'option1',
    };
  },
};
</script>


<template>
  <header>
    <nav>
      <img src="../assets/logo/favicon.jpg" class="profile-image" alt="Logo Nemanja Stojanović" />
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


  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;

    ul {
      display: flex;
      list-style: none;
      justify-content: space-around;
      gap: 10px;
      li {
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
    font-family: 'Ubuntu', serif;
    font-size: 16px;
  }
}
.dropdown:hover {
  display: flex;
  color: blue;
}
</style>
