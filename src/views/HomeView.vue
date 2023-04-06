<template>
  <main>
    <div class="hero-image">
      <div class="hero-text">
        <h1>
          Zdravo, Ja sam <br />
          <strong>Nemanja Stojanović</strong>
        </h1>
        <h2>Ja sam <span>Frontend developer</span><span>UI/UX Designer</span></h2>
        <button>Kontaktirajte me</button>
      </div>
    </div>
    <div class="container">
    <div class="aboutMe">
      <h2>Biografija</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, unde earum soluta facilis
        veniam maxime ad inventore itaque provident reprehenderit nesciunt consectetur perferendis
        minus quidem atque assumenda, repudiandae modi eum!
      </p>
      <h3>Osnovne informacije:</h3>
      <div class="textContainer">
        <div class="textBox">
          <p>Datum rođenja: 17.04.1982</p>
          <address>
            E -mail <a href="mailto:nemanja.stojanovich@gmail.com">Nemanja Stojanović</a>.<br />
            Adresa: Španskih Boraca 46<br />
          </address>
          <p><a href="tel:+4733378901">+381 63 780 901</a></p>
        </div>
      </div>
    </div>
  </div>
  </main>
</template>

<style lang="scss" scoped>
div.hero-text {
  width: 80%;
    margin: 0 auto;
  h1 {
    font-size: 20px;
    line-height: 100px;
  }
  button {
    margin: 100px;
  }
}
div.hero-image {
  background-image: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.9) 20%,
      rgba(255, 255, 255, 0.6) 30%
    ),
    url('../assets/images/hero/pexels-johannes-plenio-1103970.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center center;
  opacity: 10;

  z-index: -1;
  width: 100%;
  padding: 100px;
}
main {
  background-color: #87acd4;
  .container {
    width: 80%;
    margin: 0 auto;

  }
  .aboutMe {

    padding: 100px;
  }
}
</style>

