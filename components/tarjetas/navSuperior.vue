<template>
<div class="container ml-5">
<div class="banner-area">
  	<h2> <fa icon="map-marker-alt"/> Bogotá</h2>
  	<h2> 23&#176;c</h2>
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
	background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0Ya4la0s79ASs1p0Xs_M13lMftm50il2k3g&usqp=CAU);
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
	color: #ffffff;
}



</style>