
<template> <div id='container' style="margin:0px auto 0; width:50%;">
    <br>
      <div tabindex="0" class="e-card" id="basic">
        <div class="e-card-header">
            <div class="e-card-header-caption">
                <div class="e-card-title">Grounded airplanes during the novel coronavirus pandemic</div>
            </div>
        </div>
        <div class="e-card-content">
            •	During COVID-19 related lockdowns activities like air travel decreased to prevent   the spread of the novel coronavirus.
        </div>
    </div>
</div> 
<div id="contenedorMenu">
  <ul >
    <li  key="index" data-aos="fade-up" data-aos-delay="500"  class=" align-items-center col-sm-6 d-flex flex-column justify-content-center mb-6 " >  
     <img     
      :src="
        isDefaultImage 
      "
      width="500"/> 
      </li>
  </ul>
</div> <iframe class="item" src="https://www.eodashboard.org/iframe?poi=IT9-E13b" width="800px" height="500px" frameBorder="0" scroll="no" style="overflow:hidden"></iframe>        
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
<p>
.
</p>
  
</template> 

<script>
export default {
  name: "Todos",

  data() {
    return {
      isDefaultImage: "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/arch.jpg",
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
      
        if (window.scrollY >450) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/0.png");
        }
      }
        
      if (window.scrollY >= 450) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/arch.jpg");
        }
      }
          },
  },
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
 @import "../../node_modules/@syncfusion/ej2-vue-layouts/styles/material.css";
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
width: 500px;
height: 200px;
margin: 5% auto; /* Will not center vertically and won't work in IE6/7. */
left: 0;
right: 0;
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