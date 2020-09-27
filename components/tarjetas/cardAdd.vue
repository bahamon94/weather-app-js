<template>
<div>
  <div class="widget">
  <a href="#" class="myButton">Add Locations</a>
  <div class="bottom">
    <img src="@/assets/images/city.jpg" class="icon">
  </div>

</div>
</div>
</template>

<script>
export default {}
</script>

<style scoped>
.icon{
	width: 65%;
	display: block;
	margin-left: auto;
	margin-right: auto;
}

.widget{
	width: 320px;
	height: 180px;
	border-radius: 20px;
  background: #fff;
  position: absolute;
  
-webkit-box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
box-shadow: 0px 4px 15px -8px rgba(0,0,0,0.75);
border: 1px dashed #707070;
}
.widget a{
  display: flex;
  justify-content: center;
  margin: 20px 20px 0px 20px;
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
.myButton {
  background-color:#eae7f0;
	border-radius:42px;
	display:inline-block;
	cursor:pointer;
	color:#7952b3;
	font-family:Arial;
	font-size:18px;
	font-weight:bold;
	padding:6px 66px;
	text-decoration:none;
	text-shadow:0px 0px 2px #3d768a;
}
.myButton:hover {
	background-color:#eae6f5;
}
.myButton:active {
	position:relative;
	top:1px;
}
</style>