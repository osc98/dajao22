
<template> <div id='container' style="margin:0px auto 0; width:50%;">
    <br>
      <div tabindex="0" class="e-card" id="basic">
        <div class="e-card-header"  data-aos="fade-up" data-aos-delay="500">
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
      :width="isDefaultImageTam"/> 
      </li>
  </ul>
</div> <iframe class="item" src="https://www.eodashboard.org/iframe?poi=IT9-E13b" width="800px" height="500px" frameBorder="0" scroll="no" style="overflow:hidden"></iframe>        
<div id='container' style="margin:0px auto 0; width:50%;">
    <br>
      <div tabindex="0" class="e-card" id="basic"  data-aos="fade-up" data-aos-delay="500">
        <div class="e-card-header">
            <div class="e-card-header-caption">
                <div class="e-card-title"><h1>Airplanes during the novel coronavirus pandemic</h1></div>
            </div>
        </div>
        <div class="e-card-content">
          •	To help quantify these changes, scientists are combining two kinds of space-based
remote sensing data – synthetic aperture radar (SAR) data from JAXA’s ALOS-2 and ESA’s Copernicus Sentinel-1 satellites with NASA-processed high-resolution optical remote sensing data from Planet Inc. ESA's Copernicus Sentinel-2 multispectral satellite data – to observe and quantify the changes in grounded airplanes and air traffic around the world

        </div>
    </div>
</div> 
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<div id='container' style="margin:0px auto 0; width:50%;">
    <br>
      <div tabindex="0" class="e-card" id="basic"  data-aos="fade-up" data-aos-delay="500">
        <div class="e-card-content">
          •	By comparing SAR images of airports before, during, and after lockdowns, scientists can determine how air traffic may have changed during the pandemic.
•	In general, manmade targets such as buildings, cars, and airplanes appear brighter in SAR imagery than natural targets like bare land, forested areas, or the ocean.

        </div>
    </div>
</div> 
<br>
<br>
<br>
<br>
<br><div id='container' style="margin:0px auto 0; width:50%;">
    <br>
      <div tabindex="0" class="e-card" id="basic"  data-aos="fade-up" data-aos-delay="500">
        <div class="e-card-header">
            <div class="e-card-header-caption">
                <div class="e-card-title"><h1>North Adriatic - Water Quality Regional Maps</h1></div>
            </div>
        </div>
        
    </div>
</div> 
<br><div id='container' style="margin:0px auto 0; width:50%;">
 <div tabindex="0" class="e-card" id="basic"  data-aos="fade-up" data-aos-delay="500">
        <div class="e-card-header">
            <div class="e-card-header-caption">
                <div class="e-card-title"><h1>Airplanes during the novel coronavirus pandemic</h1></div>
            </div>
        </div>
        <div class="e-card-content">
          •	To help quantify these changes, scientists are combining two kinds of space-based
remote sensing data – synthetic aperture radar (SAR) data from JAXA’s ALOS-2 and ESA’s Copernicus Sentinel-1 satellites with NASA-processed high-resolution optical remote sensing data from Planet Inc. ESA's Copernicus Sentinel-2 multispectral satellite data – to observe and quantify the changes in grounded airplanes and air traffic around the world

        </div>
    </div>
    </div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
  
</template> 

<script>
export default {
  name: "Todos",

  data() {
    return {
      isDefaultImage: "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/arch.jpg",
      isDefaultImageTam:0,
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
        if (window.scrollY <450) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/0.png",this.isDefaultImageTam=0);
        }
      }
        
      if (window.scrollY >= 680 && window.scrollY < 700 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A1.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 700 && window.scrollY < 720 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A2.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 720 && window.scrollY < 740 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A3.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 720 && window.scrollY < 740 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A4.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 740 && window.scrollY < 780 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A5.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 780 && window.scrollY < 800 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A6.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 820 && window.scrollY < 840 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A7.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 860 && window.scrollY < 880 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A8.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 860 && window.scrollY < 880 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A9.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 920 && window.scrollY < 940 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A10.jpg",this.isDefaultImageTam=500);
        }
      }
      if (window.scrollY > 1000 ) {
        if (!this.defaultImage) {
          return (this.isDefaultImage = "https://raw.githubusercontent.com/osc98/dajao22/main/src/assets/A10.jpg",this.isDefaultImageTam=0);
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
  
  left: 0;
  right: 0;;
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