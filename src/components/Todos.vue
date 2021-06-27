
<template>
  <div>
    <h1 data-aos="fade">AOS Demo</h1>
    <p data-aos="flip-up" data-aos-duration="1000">
      AOS is awesome! Thank you
      <a class="anchor" href="https://twitter.com/michalsnik">
        Michał Sajnóg
      </a>
      😄
    </p>

    <p data-aos="slide-up" data-aos-easing="ease">
      Paragraph with fade up animation and <code>ease</code> easing.
    </p>

    <p data-aos="zoom-in" data-aos-anchor=".anchor">
      Paragraph with fade down animation with the above link as anchor. This
      makes this paragraph animate before the previous paragraph starts
      animating.
    </p>
    <img
      style="position: fixed"
      alt="Vue logo"
      :src="
        isDefaultImage
          ? 'https://thumbs.dreamstime.com/b/t%C3%AAte-et-visage-de-portrait-mouette-adulte-harengs-semblant-droits-125872008.jpg'
          : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg'
      "
      width="25%"
    />

    <hr class="my-5" />
    <ul class="list-unstyled row">
      <img width="720" height="720">
      <li key="index" data-aos="zoom-out" data-aos-delay="500"  class=" align-items-center col-sm-6 d-flex flex-column justify-content-center mb-5 " >
        <img src="../assets/animals.jpg" class="fluid mb-3 mr-3" />
      </li><img src="../assets/animals.jpg" class="fluid mb-3 mr-3" />
      <li  key="index" data-aos="fade-up" data-aos-delay="500"  class=" align-items-center col-sm-6 d-flex flex-column justify-content-center mb-5 " >
        <img src="../assets/animals.jpg" class="fluid mb-3 mr-3" />
      </li>
      <li key="index" data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-delay="500"  class=" align-items-center col-sm-6 d-flex flex-column justify-content-center mb-5 " >
        <img src="../assets/animals.jpg" class="fluid mb-3 mr-3" />
      </li>
      <li key="index" data-aos="fade-up" data-aos-delay="500"  class=" align-items-center col-sm-6 d-flex flex-column justify-content-center mb-5 " >
        <img src="../assets/animals.jpg" class="fluid mb-3 mr-3" />
      </li>
    </ul>
  </div>
</template> 

<script>
export default {
  name: "Todos",

  data() {
    return {
      isDefaultImage: true,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      // Any code to be executed when the window is scrolled
      console.log(window.scrollY);
      if (window.scrollY > 200) {
        return (this.isDefaultImage = false);
      }
      if (window.scrollY <= 100) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = true);
        }
      }
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
#menu{
  list-style: none;
  overflow: auto;
}

#menu li{
  display: inline;
}
#logo
{
  float:left;
}
#contenedorMenu{
  position: fixed;
}
  .todos {
    max-width: 400px;
    margin: 20px auto;
    position: relative;
  }
  input {
    width: 100%;
    padding: 12px;
    border: 1px solid #eee;
    border-radius: 10px;
    box-sizing: border-box;
    margin-bottom: 20px;
  }
  .todos ul {
    position: relative;
    padding: 0;
  }
  .todos li {
    list-style-type: none;
    display: block;
    margin-bottom: 10px;
    padding: 10px;
    background: white;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    border-radius: 10px;
    width: 100%;
    box-sizing: border-box;
  }
  .todos li:hover {
    cursor: pointer;
  }

  /* list transitions */
  .list-enter-from {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-enter-active {
    transition: all 0.4s ease;
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* for move transition after item leaves */
  }
  .list-move {
    transition: all 0.3s ease;
  }

  /* switch transitions */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .switch-enter-active{
    transition: all 0.5s ease;
  }
  .switch-leave-active {
    transition: all 0.5s ease;
    position: absolute;
    width: 100%;
  }
</style>