<template>
  <div class="about">
    <transition
      appear
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
    >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p >The Dajao team created a proyect called "Dajao in Europe", it's a web page where we'll count the economic</p>
    <p>and environmental impact of the pandemic of COVID-19 due to the decrease of human activity using geospatial</p>
    <p>information and Earth's daily images before and after the pandemic.</p><br><br>

    <p>Who We Are</p>
    <p>We are DAJAO</p>
    <p>A little team that works for a better world providing more information and easily to understand</p>
    <p>We are made up of a group of 5 personnel which are.</p>
    <br><br>
    <h1>Oscar</h1>
    <img src="../assets/osc98.jpg"> 
    <br><br>
    <h1>Daniela</h1> 
    <img src="../assets/dani.jpg">
    <br><br>
     <h1>Andrea</h1>
    <img src="../assets/andrea.jpg">
    <br><br>
    <h1>Ana</h1>
    <img src="../assets/ana.jpg">
    <br><br>
      <h1>Jonathan </h1>
    <img src="../assets/pelon1.jpg">
    


  </div>
</template>

<script>
import { ref } from 'vue'
import gsap from 'gsap'

export default {
  setup() {
    const showTitle = ref(true)

    const beforeEnter = (el) => {
      console.log('before enter - set intial state')
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      console.log('starting to enter - make transition')
      gsap.to(el, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done
      })
    }

    return { beforeEnter, enter, showTitle }
  }
}
</script>

<style>
  .about {
    max-width: 600px;
    margin: 20px auto;
  }
</style>