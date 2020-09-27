<template>
<div class="container ml-5">
<div class="banner-area">
  	<h2> <fa icon="map-marker-alt"/> {{dataCiudad.name}}</h2>
  	
</div>
<div class="cards-temp-icon">
  <img :src="$srcImgWeather(dataCiudad.weather[0].icon)" class="icon">
  <small class="text-icon">{{dataCiudad.weather[0].main}}</small>
</div>
<div class="cards-temp">
<div class="temp-text">{{$quitaDecimales(dataCiudad.main.temp)}}&#176;c</div>  
</div>

</div>
  
</template>

<script>

import utils from '~/mixins/utils'
export default {
mixins: [utils],
  components:{
  },
  props:{
	  dataCiudad :{
      type: Object,
      required: false,
      default: null
	  }
  },
  data() {
 return {
       
}
  },
  mounted(){
 }
}   
</script>

<style  escoped>
*{
	margin: 0;
	padding: 0;
}
body{
	text-align: start;
}
.svg-inline--fa {
    display: inline-block;
    font-size: 25px;
}
.banner-area{
	width: 90%;
	height: 200px;
	position: fixed;
	top: 30px;
	background-image: url('../../assets/images/weather.jpg');
	-webkit-background-size: cover;
	background-size: cover;
	background-position: center center;
	border-radius: 50px;
}
.banner-area h2{
	padding-left:5% ;
  padding-top: 2%;
	font-size: 30px;
	font-family: poppins;
	text-transform: capitalize;
	color: #3f0088;
}
.cards-temp-icon{
  position: absolute;
    top: 50px;
    left: -20px;
    color: #ffffff;
    font-weight: bold;
    margin-left: 20px;
    background-color:#3f0088;
    height: 80px;
    width: 80px;
    border-radius: 0px 15px 15px 0px;
    -moz-border-radius: 0px 15px 15px 0px;
    -webkit-border-radius: 0px 15px 15px 0px;
    border: 0px dashed #000000;
    z-index: 1000;
  }
  .cards-temp{
  position: absolute;
    top: 120px;
    left: -20px;
    color: #ffffff;
    font-weight: bold;
    margin-left: 20px;
    background-color:#7952b3;
    height: 80px;
    width: 80px;
    text-align: center;
    border-radius: 0px 15px 15px 0px;
    -moz-border-radius: 0px 15px 15px 0px;
    -webkit-border-radius: 0px 15px 15px 0px;
    border: 0px dashed #000000;
  }
  .temp-text{
    font-size: 22px;
    line-height: 3.5;
  }

.icon{
	width: 90%;
	margin-bottom: -20px;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
.text-icon{
  color: #ffffff;
	margin-left: 10px;
}


</style>