<template>
  <div>
   <navbar-forest />
   <div class="cont-cards-columns ">
   <card3-days />
   <card3-days />
   <card3-days />
   <card3-days />
   </div>
  </div>
</template>

<script>
import Navbar from "~/components/tarjetas/navSuperior.vue";
import CardForecast from "~/components/tarjetas/forecastCard.vue";
export default {
  components:{
    'navbar-forest' : Navbar,
    'card3-days': CardForecast
  }
}
</script>

<style scoped>
.cont-cards-columns {
  position: absolute;
  top:1;
  right: 1;
  width: 200;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 24.0%);
  grid-gap: 60px;
}
</style>
