<template>
    <div id="contact_page">
      <form>
        <h1>Kontakt podaci</h1>
        <div>
          <label for="ime_prezime">Ime i prezime</label>
          <input id="ime_prezime" type="text" name="ime_prezime" />
        </div>
        <div>
          <label for="email">E-mail adresa:</label>
          <input id="email" type="email" name="email" />
        </div>
        <div>
          <label for="tel">Kontakt telefon:</label>
          <input id="tel" type="tel" name="tel" />
        </div>
        <div>
          <label for="poruka">Naslov poruke</label>
          <input id="poruka" type="text" name="poruka" />
        </div>
        <div>
          <label for="message">Tekst poruka:</label>
          <textarea
            name="your-message"
            id="message"
            cols="50"
            rows="12"
          ></textarea>
        </div>
        <div class="btn">
          <button type="submit">Pošalji</button>
        </div>
      </form>
    </div>
  </template>

  
<style lang="scss" scoped>
#contact_page {
    padding-top: 120px;
  form {
    max-width: 600px;
    margin: 0 auto;
    font-weight: 700;

    h1 {
      text-align: center;
      margin-bottom: 15px;
      color: rgb(29, 29, 141);
      letter-spacing: 2px;
      font-size: 30px;
    }

    div {
      padding: 15px 0;

      label {
        display: block;
        font-size: 16px;
        margin-bottom: 3px;
        color: rgb(29, 29, 141);
      }

      input {
        height: 40px;
        width: 100%;
        font-size: 18px;
        padding: 0 10px;
        border: 1px solid #3772b1;
      }

      textarea {
        border: 1px solid #3772b1;
        width: 100%;
      }
    }

    .btn {
      text-align: center;
      margin-top: 15px;
      margin-bottom: 50px;

      button {
        padding: 10px 30px;
        font-size: 18px;
        font-weight: 700;
        color: white;
        border: 2px solid rgb(29, 29, 141);
        background-color: #3772b1;
        border-radius: 5px;

        &:hover {
          background-color: #fff;
          color: rgb(29, 29, 141);
          cursor: pointer;
        }
      }
    }
  }
}
</style>