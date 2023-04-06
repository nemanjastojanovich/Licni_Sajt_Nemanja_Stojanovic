<template>
    <footer>
        <h7>Pratite me</h7>
        <div class="social-links">
            <a href="https://www.facebook.com/nemanja.stojanovic.7568 " target="_blank"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.linkedin.com/in/nemanja-stojanovic-a85ba463/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.youtube.com/channel/UCMYh36toRibxsITk-oSkF9w" target="_blank"><i class="fab fa-youtube"></i></a>
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
    padding: 10px;
    margin: 40px auto 0;
    position: fixed;
    bottom: 0;
    width: 100%;
    .social-links {
      a {
        margin: 5px;
        color: rgb(29, 29, 141);
      }
    }
  }
  footer h7 {
    color: rgb(29, 29, 141);
  }
  footer h7::after {
    content: "";
    width: 55px;
    height: 1px;
    display: block;
    background-color: rgb(29, 29, 141);;
    margin: 0 auto;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  footer .footerCopyright {
    text-align: center;
    padding: 15px 0;
    border-top: 1px solid rgb(29, 29, 141);;
    margin-top: 10px;
    color: rgb(0, 0, 128);
  } 
</style>
