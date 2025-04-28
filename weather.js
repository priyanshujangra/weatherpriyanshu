let weather ={
    "apikey":"34d8f6bf7976243be6507a2b7bd3ff75",
    fetchweather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
         + city 
         + "&units=metric&appid=" 
         + this.apikey)
         .then((Response)=>Response.json())
        .then((data)=>this.displayweather(data));

    },
    displayweather: function(data){
        const{name} = data;
        const {icon,description} = data.weather[0];
        const {temp,humidity} =data.main;
        const {speed}=data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText ="Weather in " +  name;
        // document.querySelector(".icon").src = "https://cdn.iconscout.com/icon/free/png-256/dot-24-458488.png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText =temp+"°c";
        document.querySelector(".humidity").innerText="humidity : " + humidity +"%";
        document.querySelector(".wind").innerText = "wind speed " + speed +"km/h";
        document.querySelector(".weather").classList.remove("loading");
        // document.body,Style,backgroundImag
    },
    search: function(){
        this.fetchweather(document.querySelector(".searchbar").value)
    }
};
document.querySelector(".search button")
.addEventListener("click",function(){
    weather.search();
})