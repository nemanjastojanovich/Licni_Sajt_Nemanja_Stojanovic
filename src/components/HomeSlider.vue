<template>
  <div class="slider-wrapper">
    <button id="left-btn" @click="toLeft()"><i class="arrow"></i></button>

    <div class="slider-images">
      <img src="../assets/images/slider/tumblr_lsus01g1ik1qies3uo1_400.png" alt="Javascript" title="JS" />
      <img src="../assets/images/slider/logo-2582748_960_720.png" alt="HTML5" title="HTML" />
      <img src="../assets/images/slider/css.png" alt="CSS" title="CSS" />
    </div>

    <button id="right-btn" @click="toRight()"><i class="arrow"></i></button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
let toRight = () => null
let toLeft = () => null
onMounted(() => {
  let allImg = document.querySelectorAll('.slider-images img')

  let indexImg = 0

  toRight = () => {
    removeImg()
    indexImg++

    if (indexImg === allImg.length) {
      indexImg = 0
    }

    allImg[indexImg].style.display = 'block'
  }

  toLeft = () => {
    removeImg()
    indexImg--

    if (indexImg === -1) {
      indexImg = allImg.length - 1
    }

    allImg[indexImg].style.display = 'block'
  }

  const removeImg = () => {
    allImg.forEach((oneImg) => {
      oneImg.style.display = 'none'
    })
  }
  return toLeft(), toRight()
})
</script>

<style lang="scss" scoped>
.slider-wrapper {
  max-width: 1000px;
  height: 520px;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.24), 0 9px 46px 8px rgba(0, 0, 0, 0.22),
    0 11px 15px -7px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  margin-top: 20px;
  position: relative;
 ;
  opacity: 0.83;

  .slider-images {
    height: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      display: inline-block;

      &:first-child {
        display: block;
      }
    }
  }

  button {
    height: 65px;
    width: 65px;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.4);
    cursor: pointer;
    top: 40%;
    position: absolute;
    z-index: 999;

    .arrow {
      border: solid rgb(255, 235, 205);
      border-width: 0 4px 4px 0;
      display: inline-block;
      padding: 10px;
      outline: none;
    }
  }

  #right-btn {
    right: 0;

    .arrow {
      transform: rotate(-45deg);
    }
  }

  #left-btn {
    left: 0;

    .arrow {
      transform: rotate(135deg);
    }
  }
}
</style>
