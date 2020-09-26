<template>
  <div class="tarjeta">
      
     
      <div class="panel-izq panel">
          <!-- <div class="fecha">
              Monday, 20 Aug 2018
          </div> -->
          
          <div class="ciudad">
           <fa icon="map-marker-alt"/>  Bogotá
          </div>
          <!-- <div class="temp">
              <img ssrc="https://s5.postimg.cc/yzcm7htyb/image.png" alt="" width="60">
              27&deg;
          </div> -->
          <div class="panel-dere panel">
              <img src="https://s5.postimg.cc/lifnombwz/mumbai1.png" alt="" width="160">
          </div>
      </div>
  </div>
</template>

<script>

export default {
  components:{
  },
  data() {
 return {
       
}
  }
}   
</script>

<style lang="css" escoped>
* {
	 margin: 0;
	 padding: 0;
	 outline: none;
}
 body {
	 font-family: 'Roboto', sans-serif;
	 overflow: hidden;
	 background: #ee0000;
}
 div.tarjeta {
	 position: relative;
	 width: 90%;
	 height:255px;
	 margin: 30px auto;
	 background-color: #fcfdfd;
	 border-radius: 35px;
	 padding: 25px;
	 padding-right: 30px;
     background-image: url('https://i.pinimg.com/originals/1e/f4/b4/1ef4b43ffafdc9f89214911eb288a544.jpg');
      background-repeat: no-repeat, no-repeat
	 /* box-shadow: 0px 31px 35px -26px #080c21; */
}
 div.fecha {
	 font-size: 14px;
	 font-weight: bold;
	 color: rgba(0, 0, 0, 0.5);
}
 div.ciudad {
	 font-size: 21px;
	 font-weight: bold;
	 text-transform: capitalize;
	 padding-top: 15px;
   padding-left: 25px;
	 color: #7952b3;
}
 div.temp {
	 font-size: 20px;
	 color: rgba(0, 0, 0, 0.9);
	 font-weight: 100;
}
 div.panel {
	 display: inline-block;
}
 div.right-panel {
	 position: absolute;
	 float: right;
	 top: 0;
	 margin-top: 35px;
	 padding-left: 10px;
}
</style>