const utils = {

    methods:{
        $srcImgWeather(id){
            return `http://openweathermap.org/img/wn/${id}@2x.png`
        },
        $quitaDecimales(number){
            return Math.trunc(number)
        }
    }

}
export default utils