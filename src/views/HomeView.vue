<script setup>
import HomeSlider from '@/components/HomeSlider.vue'
import TextAnim from '@/components/TextAnim.vue'
</script>
<template>
  <main>
    <div class="hero-image">
      <div class="hero-text">
        <h1>
          Zdravo, Ja sam
          <strong>Nemanja Stojanović</strong>
        </h1>
        <h2><TextAnim /></h2>
        <button>Preuzmite CV</button>
      </div>
      <img src="../assets/images/nemanja.png" alt="" />
    </div>
    <div class="wraper">
      <div class="container">
        <div class="avatarPicture">
          <img
            src="../assets/images/avatar/depositphotos_81611556-stock-illustration-web-developer-design.jpg"
            alt=""
          />
        </div>
        <div class="aboutMe">
          <h2>Biografija</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, unde earum soluta facilis
            veniam maxime ad inventore itaque provident reprehenderit nesciunt consectetur
            perferendis minus quidem atque assumenda, repudiandae modi eum!
          </p>
          <h3>Osnovne informacije:</h3>
          <div class="textContainer">
            <div class="textBox">
              <p>Datum rođenja: 17.04.1982</p>
              <address>
                E -mail: <a href="mailto:nemanja.stojanovich@gmail.com">Nemanja Stojanović</a><br />
                <br />
                Adresa: Španskih Boraca 46<br />
              </address>
              <p>Kontakt tel: <a href="tel:+381 63 780 901">+381 63 780 901</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <HomeSlider />
  </main>
</template>

<style lang="scss" scoped>
div.hero-text {
  width: 80%;
  margin: 0 auto;
  padding: 100px 0;
  h1 {
    font-size: 40px;
    margin-bottom: 100px;
  }
  h2 {
    font-size: 30px;
  }
  button {
    margin: 50px 0;
    background-color: #008cba;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 25px;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
}
div.hero-image {
  display: flex;
  width: 80%;
  margin: 0 auto;
  align-items: center;
 
  img {
    height: 240px;
    width: 240px;
    margin-right: 200px;
  }
}
main {
  padding: 0 0 100px 0;
  
  .wraper {
    width: 100%;
    background-color: #87acd4;

    .container {
      width: 80%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      
      .avatarPicture {
        justify-content: space-between;
        img {
          height: 240px;
          width: 240px;
        }
      }
      .aboutMe {
        padding: 50px;
        h2 {
          font-size: 30px;
          padding: 5px;
        }
        p {
          padding: 5px 0px;
        }
        h3 {
          font-size: 25px;
          padding: 5px;
        }
        address {
          padding: 5px 0px;
        }
      }
    }
  }
}

button:hover {
  cursor: pointer;
  transform: scale(1.05);
}

@media (max-width: 1000px) {
  main {
    .hero-image {
      flex-direction: column;
      padding-bottom: 50px;
    }
  }
  .wraper {
    .container {
      flex-direction: column;
      .avatarPicture {
        margin-top: 50px;
      }
    }
  }
  
}



</style>
