<template>
	<div class="course">
		<div class="course-info">
			<img src="@/assets/images/cloud.svg">
		</div>

		<div class="interior">
			<h5 class="city">Singapore</h5>
			<h5 class="degree">25&#176;c</h5>
		</div>

		<div class="course-progress">
			<div class="progress-container">
				<div class="progress-text">
					32 / 23
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
	padding: 10px;
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
	font-size: 16px;
	opacity: 0.8;
	letter-spacing: 1px	;
	font-weight: bold;
	
}
.course .city{
	position: absolute;
	right: 10;
	width: 200px;
	color: rgb(0, 0, 0);
	margin: 20px 95px;
} 
.course .degree{
	position: absolute;
	right: 10;
	width: 200px;
	color: rgb(0, 0, 0);
	margin: 50px 110px;
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