<template>
  <div class="posicion-cards">
     <b-overlay :show="show && forecastShow" no-wrap>
      </b-overlay>
  <div v-if="!show">
    <navbar-forest :dataCiudad="data" />
  </div>

  <div v-if="!show" class="cont-cards-columns px-5">
    
    <!-- 3 days forecast -->
   <div v-if="!forecastShow">
    <div class="pb-3">
      <h3><strong>3 Days </strong>Forecast</h3>
    </div>
    
    <div v-for="(item,index) in dataForest" :key="index"  class="course">
		<div class="course-info">
			<img :src="$srcImgWeather(item.weather[0].icon)">
		</div>

		<div class="interior">
			<h5 class="dia">{{nombreDiaSemana(item.dt)}}</h5>
			<h5 class="degree">{{item.weather[0].main}}</h5>
		</div>

		<div class="course-progress">
			<div class="progress-container">
				<div class="progress-text">
					{{$quitaDecimales(item.temp.day)}}&#176; / {{$quitaDecimales(item.temp.night)}}&#176;
				</div>
			</div>
		</div>
	</div>
   
    
  </div>

  <!-- Place to visit -->
  <div class="pl-5">
     <div>
      <h3><strong>Place to </strong>Visit</h3>
    </div>
    <place-visit tipoCard='grande' class="pt-3"/>
  </div>

  <!-- Top Reviews -->
  <div>
    <div class="pb-4">
      Top reviews
    <b-avatar rounded="sm"></b-avatar>
    <b-avatar rounded="sm"></b-avatar>
    <b-avatar rounded="sm"></b-avatar>
    <b-avatar rounded="sm"></b-avatar>
    </div>
    <place-visit tipoCard='pequena'/>
    <place-visit class="pt-3" tipoCard='mediana'/>
  </div>
</div>

  <!-- Card Derechas paises -->
  <div v-if="!show"  class="derecha-cards">
 <card-derecha v-for="(item, i) in dataPais.list" :key="i" :dataPais="item" pais="Francia"/>
 <addLocacion/>
  </div>

  </div>
</template>

<script>
import moment from "moment";
import Navbar from "~/components/tarjetas/navSuperior.vue";
import cardImage from "~/components/tarjetas/cardImage.vue";
import CardDerecha from "~/components/tarjetas/cardPaises.vue";
import addLocacion from "~/components/tarjetas/cardAdd.vue";
import utils from '~/mixins/utils'
export default {
mixins: [utils],
  components:{
    'navbar-forest' : Navbar,
    'place-visit': cardImage,
    'card-derecha': CardDerecha,
    addLocacion
  },
  
  data() {
      return {
        data: [],
        dataForest:[],
        dataPais:[],
        show: true,
        forecastShow : true
      }
    },
    watch:{
    },
  mounted(){
    this.obetenerInformacion()
    this.obtenerForecast()
    this.obternerFrancia()
  },
  methods:{
     obetenerInformacion(){
       this.$http.$get(`weather?id=${this.$store.getters.get_bogota}&units=metric&lang=es&appid=${this.$store.getters.get_apiKey}`).then((result) => {
        //  this.show = !this.show
         this.data = result
       })
    },
    obtenerForecast(){
      this.dataForest = []
      this.$http.$get(`onecall?lat=4.61&lon=-74.08&units=metric&lang=es&appid=${this.$store.getters.get_apiKey}`).then((result) => {
         
         for (let i = 1; i < result.daily.length; i++) {
          this.dataForest.push(result.daily[i])
          if (i===3) {
            break
          }
           
         }
       })
    },
    obternerFrancia(){
      this.$http.$get(`group?id=${this.$store.getters.get_paris},${this.$store.getters.get_lyon}&units=metric&lang=es&appid=${this.$store.getters.get_apiKey}`).then((result) => {
         console.log('FRANCIA', result);
         this.dataPais = result
         this.forecastShow = !this.forecastShow
        this.show = !this.show
       })
    },
    nombreDiaSemana(fecha){
    const nDate = Date(fecha)
    return  moment(nDate.getDate).format('dddd')
  },
  }
}
</script>

<style scoped>
.posicion-cards{
  padding-top: 18%;
}
.cont-cards-columns {
  position: absolute;
  top:1;
  width: 100;
  left: 20px;
  height:50px;
  padding-top: 10px;
  display: grid;
  grid-template-columns: repeat(4, 24.0%);
  grid-gap: 0px;
}
.derecha-cards{
  position: absolute;
  top:0;
  width: 100;
  right: 0;
  left: 0;
  height:50px;
  display: grid;
  grid-template-rows: repeat(3, 33.0%);
  grid-gap: 120px;
  margin-top: 9%;
  margin-left: 70%;
}
*{
	box-sizing: border-box;
}
.course{
	height: 80px;
	width: 280px;
	background: #ffffff;
	border-radius: 14px;
	/* box-shadow: 1px 5px 40px  rgba(0,0,0,0,0.2) ; */
	display: inline-block;
	overflow: hidden;
-webkit-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
-moz-box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
box-shadow: 0px 0px 3px 1px rgba(0,0,0,0.2);
}

.course-info{
	float: left;
	padding: 0;
	position: relative;
	width: 60%;
}

.course-progress{
	border-radius: 14px;
	background: #7952b3;
	color: #ffffff;
	right:  1;
	float: left;
	margin-left: 40px;
	padding: 35px;
	height: 80px;
}
.course h2{
	letter-spacing: 1px;
	margin: 10px 0px;
}
.course h6{
	letter-spacing: 1px;
	opacity: 0.8;
	text-transform: capitalize;
	margin: 10px 0px;
}

.progress-container {
	position: absolute;
	text-align: center;
	margin-left: -30px;
}
.progress-text{
	font-size: 14px;
	opacity: 0.8;
	font-weight: bold;
	text-align: start;
}
.course .dia{
	position: absolute;
	right: 10;
	width: 200px;
	color: rgb(0, 0, 0);
	margin: 20px 95px;
  font-weight: bold;
  text-transform: capitalize;
} 
.course .degree{
	position: absolute;
	right: 10;
	width: 200px;
	color: rgb(0, 0, 0);
  margin: 50px 10px;
  text-align: center;
} 


@media screen and (max-width: 740px)  {
	.course-progress, .course-info{
		width: 100%;
		height: 200px;
		float: none;
	}
	.course-info {
		height: 140px;
	}
}

</style>
