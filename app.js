const apikey="28089e3ce6eab80478d6a7a65c525bd5";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const search=document.querySelector(".find input");
const searchbtn=document.querySelector(".find button");
 

async function checkWeather(city){
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data=await response.json();

    console.log(data);


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
}


 searchbtn.addEventListener("click",()=>{
 
    checkWeather(search.value);

 })
