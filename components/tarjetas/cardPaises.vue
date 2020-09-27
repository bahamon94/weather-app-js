<template>
<div>
  <div class="widget">
  <div class="left">
    <img :src="$srcImgWeather(dataPais.weather[0].icon)" class="icon">
  </div>
  <div class="right">
    <h5 class="temperatura">{{Math.trunc(dataPais.main.temp)}}&#176;c</h5>
  </div>
  <div class="right-ciudad">
    <h5 class="ciudad">{{dataPais.name}}</h5>
    <h6 class="pais">{{pais}}</h6>
  </div>
  <div class="bottom">
      <div>
          humidity <span>{{dataPais.main.humidity}}</span>
      </div>
      <div>
          <span>{{dataPais.weather[0].description}}</span>
      </div>
      <div>
          <span>{{dataPais.wind.speed}}km/h</span>
      </div>
  </div>

</div>
</div>
</template>

<script>
import utils from '~/mixins/utils'
export default {
mixins: [utils],
props:{
  dataPais:{
    type:Object,
    required: false,
    default : []
  },
  pais :{
    type : String,
    required : false,
    default :''

  }
}
}
</script>

<style scoped>

.widget{
	width: 320px;
	height: 120px;
	border-radius: 20px;
  background: #fff;
  position: absolute;
-webkit-box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
}
.widget .left{
	position: absolute;
	left: 0;
  width: 100px;
  height: 65%;
  border-radius: 15px;
  background-color: #bdbdbd;
}

.widget .right{
	position: absolute;
  right: 0;
	width: 100px;
	color: #fff;
  margin: 15px 0;
  margin-right: 120px;
}
.widget .right-ciudad{
	position: absolute;
  right: 0;
	width: 100px;
	color: rgb(2, 0, 0);
  margin: 25px 0;
  margin-right: 10px;
}

.icon{
	width: 75%;
	margin-bottom: -30px;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.pais{
	color: rgb(5, 0, 0);
	text-align: center;
  margin-top: 0;
  text-transform: capitalize;
}

.widget .right .ciudad{
	font-size: 1em;
	text-align: center;
  margin: 0;
  color: #707070;
  }

.widget .right .temperatura{
	font-size: 2em;
	font-weight: bold;
	text-align: center;
  margin: 0;
  color: black;
}

.widget .bottom{
	width: 100%;
	position: absolute;
	top: 80px;
	display: flex;
	justify-content: center;
	color: #707070;
}

.widget .bottom div{
	margin: 10px 10px 5px 10px;
	text-align: center;
	line-height: 100%;
	font-size: 0.83em;
  color: #707070;
}
</style>