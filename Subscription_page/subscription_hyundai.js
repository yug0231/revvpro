
document.querySelector("form").addEventListener("submit", formData);
 var cityArr = JSON.parse(localStorage.getItem("cityName")) ||[];

function formData(){
    event.preventDefault();
    var city_name = document.getElementById("select-city").value;
    console.log(city_name);
    var subs_city = document.getElementById("subscription-city");
    subs_city.innerText = "in "+city_name;
    
    window.open("../subscription_carPage/hundai_car/hyundai_unboxed.html","_self")
    // window.location.href("Subscription_page\subscription_carPage")

   var cityObj = {
    city_name: city_name
   }

     cityArr.push(cityObj)
     localStorage.setItem("cityName", JSON.stringify(cityArr));
}


