<template>
<div>
<!-- Card Grande  -->
<div class="contenedor">
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbc8rnNv_E7QGZG9w9awZz9i6YCm8-0mZJMw&usqp=CAU' 
  :class="tipoCard === 'grande' ? 'imgRedonda-grande' : tipoCard === 'mediana' ? 'imgRedonda-mediana' : 'imgRedonda-pequena' " />
    <div class="texto">
      <fa icon="map-marker-alt"/>   Singapure
    </div>
    <div class="course-progress">
			
		</div>
</div>


</div>
</template>

<script>
export default {
  props :{
    tipoCard :{
      type : String,
      required : true,
    }
  }

}
</script>

<style escoped>
.imgRedonda-grande {
    width:240px;
    height:260px;
    border-radius:50px;
}
.imgRedonda-pequena {
    width:240px;
    height:80px;
    border-radius:20px;
    padding-bottom: 10px;
}
.imgRedonda-mediana {
    width:240px;
    height:150px;
    border-radius:35px;
}
.contenedor{
    position: relative;
    display: inline-block;
    text-align: center;
}
 
.texto{
    position: absolute;
    top: 10px;
    left: 10px;
    color: #ffffff;
    font-weight: bold;
    margin-left: 20px;
}

</style>