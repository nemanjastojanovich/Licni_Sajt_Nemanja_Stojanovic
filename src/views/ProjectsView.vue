<template>
    <div class="projects">
        <h1>
            Moji projekti:
        </h1>
        <ul>
            <li>
                <a href="https://github.com/nemanjastojanovich/WeatherForecast.git" target="_blank">Vremenska prognoza</a>
            </li>
            <li>
                <a href="https://github.com/nemanjastojanovich/CryptoApp.git" target="_blank">Kripto menjačnica</a>
            </li>
            <li>
                <a href="https://github.com/nemanjastojanovich/My-Newsletter-subscribe.git" target="_blank">Subscribe forma</a>
            </li>
            <li>
                <a href="https://github.com/nemanjastojanovich/XO.git" target="_blank">XO       </a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.projects {
    padding-top: 200px;
    padding-bottom: 50px;
    margin: 0 auto;
    width: 80%;
       h1 {
        text-align: center;
        padding-bottom: 30px;
        color: rgb(29, 29, 141);
        letter-spacing: 2px;
        font-size: 30px;
        font-weight: 700;
    }
    ul {
        margin-bottom: 270px;
        li {
            a {
                color: rgb(29, 29, 141);
            letter-spacing: 2px;
            font-size: 25;
            font-weight: 700;
            line-height: 35px;
            text-decoration: none;
            display: inline-block;
            cursor: pointer;
            transition: all 0.1s ease-in-out;
            }
            

        }
    }
}

ul li a:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
</style>