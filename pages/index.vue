<template>
  <div class="posicion-cards">
  <div>
    <navbar-forest />
  </div>

  <div class="cont-cards-columns px-5">
    <!-- 3 days forecast -->
   <div>
    <div>
      <h3><strong>3 Days</strong>Forecast</h3>
    </div>
    <card3-days/>
    <card3-days/>
    <card3-days/>
  </div>

  <!-- Place to visit -->
  <div class="pl-5">
     <div>
      <h3><strong>Place to </strong>Visit</h3>
    </div>
    <place-visit tipoCard='grande'/>
  </div>
  <!-- Top Reviews -->
  <div class="pl-5">
    <div>
      <h3><strong>Place to </strong>Visit</h3>
    </div>
    <place-visit tipoCard='pequena'/>
    <place-visit class="pt-2" tipoCard='mediana'/>
  </div>

  </div>
  </div>
</template>

<script>
import Navbar from "~/components/tarjetas/navSuperior.vue";
import CardForecast from "~/components/tarjetas/forecastCard.vue";
import cardImage from "~/components/tarjetas/cardImage.vue";
export default {
  components:{
    'navbar-forest' : Navbar,
    'card3-days': CardForecast,
    'place-visit': cardImage
  }
}
</script>

<style scoped>
.posicion-cards{
  padding-top: 20%;
  
  
}
.cont-cards-columns {
  position: absolute;
  top:1;
  width: 100;
  left: 20px;
  height:50px;
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(4, 24.0%);
  grid-gap: 1px;
}
</style>
