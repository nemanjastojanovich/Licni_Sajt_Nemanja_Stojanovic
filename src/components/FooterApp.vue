<template>
  <footer>
    <p>Pratite me</p>
    <div class="social-links">
      <a href="https://www.facebook.com/nemanja.stojanovic.7568 " target="_blank"
        ><i class="fab fa-facebook-f"></i
      ></a>
      <a href="https://www.linkedin.com/in/nemanja-stojanovic-a85ba463/" target="_blank"
        ><i class="fa-brands fa-linkedin"></i
      ></a>
      <a href="https://www.youtube.com/channel/UCMYh36toRibxsITk-oSkF9w" target="_blank"
        ><i class="fab fa-youtube"></i
      ></a>
    </div>
    <div class="footerCopyright">
      <small>Copyright &copy; Nemanja Stojanović</small>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  text-align: center;
  background-color: #3772b1;
  padding: 10px 0 0;
  margin: 40px auto 0;
  box-shadow: inset 0 5px 5px rgb(0, 0, 0, 0.1);
  font-size: 20px;
  color: white;

  p {
    color: white;
    

    &::after {
      content: '';
      width: 100px;
      height: 1px;
      display: block;
      background-color: white;
      margin: 0 auto;
      margin-top: 5px;
      margin-bottom: 5px;
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3px;
    a {
      margin: 10px;
      color: rgb(29, 29, 141);
      i {
        transition: all 0.1s ease-in-out;
      }
    }
  }

  .footerCopyright {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    
    color: white;
    &::before {
      content: '';
      width: 300px;
      height: 1px;
      display: block;
      background-color: white;
      margin: 0 auto;
      margin-top: 5px;
      margin-bottom: 10px;
    }
  }
}


.social-links a i:hover {
  cursor: pointer;
  transform: scale(1.2);
}

</style>
