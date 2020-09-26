<template>
  <div id="clima_wraper">
    <div class="climaCard">
      <div class="actualTemp">
        <span class="temp">23&deg;</span>
        <span class="ubicacion">Bruselas</span>
      </div>
      <div class="actualClima">
        <span class="condiciones">&#xf00d;</span>
        <div class="info">
          <span class="lluvia">1.03m</span>
          <span class="viento">10MPH</span>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/weather-icons/1.2/css/weather-icons.min.css);
#clima_wraper{
	width: 300px;
	margin: 80px auto;
}
.climaCard{
	width: 300px;
	height: 100px;
	font-family: 'Open Sans';
	position: relative;
}
.actualTemp{
	width: 220px;
	height: 200px;
	background: rgb(41, 41, 41);
	position: absolute;
	top: 0;
	left: 0;
}
.actualClima{
	width: 180px;
	height: 200px;
	background: rgb(237, 237, 237);
	margin: 0;
	position: absolute;
	top: 0;
	right: 0;
}
.temp{
	font-size: 80px;
	text-align: center;
	display: block;
	font-weight: 300;
	color: rgb(255, 255, 255);
	padding: 20px 0 0;
}
.ubicacion{
	color: rgb(255, 255, 255);
	text-align: center;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 30px;
	display: block;
}
.condiciones{
	font-family: weathericons;
	font-size: 80px;
	display: block;
	padding: 20px 0 0;
	text-align: center;
}
.info{
	width: 180px;
	height: 50px;
	position: absolute;
	bottom: 0;
	right: 0;
	background: rgb(42, 178, 234);
	font-weight: 700;
	color: rgb(255, 255, 255);
	text-align: center;
}
.lluvia {
	width: 50%;
	position: absolute;
	left: 10px;
	word-spacing: 60px;
	top: 3px;
}
.lluvia::before{
	display: block;
	content: '\f04e';
	font-family: weathericons;
	font-size: 40px;
	left: 6px;
	top: -4px;
	position: absolute;
}
.viento {
	width: 50%;
	right: -10px;
	position: absolute;
	word-spacing: 60px;
	top: 3px;
}
.viento::before{
	display: block;
	content: '\f050';
	font-family: weathericons;
	font-size: 25px;
	left: -10px;
	position: absolute;
	top: 5px;
}
</style>