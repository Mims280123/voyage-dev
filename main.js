let myHeading = document.querySelector('h1');
myHeading.textContent = 'Bonjour!';

window.addEventListener('load', function() {
    var dateElement = document.getElementById('date');
    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    dateElement.textContent = dateString;
});
let ville = "Paris";

function recevoirTemperature(ville) {

let appid = "e54ca2f075f547325f9841a0e0dcbb7b";

const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + '&appid' + appid + '&lang-fr&units-metric';
let requete = new XMLHttpRequest();
requete.open('GET'.url);
requete.responseType = 'json';
requete.send();

requete.onload = function() ()
console.log(requete);
let temp = requete.response.main.temp;
let ville = requete.response.name;

}
let  météo  =  {
    "apikey" : WEATHER_API_KEY ,
    fetchWeather : fonction  ( ville )  {
        récupérer ( "https://api.openweathermap.org/data/2.5/weather?q=" 
        +  ville 
        +  "&units=metric&appid=" 
        +  ça . apikey )
        . then ( ( Réponse )  =>  Réponse . json ( ) )
        . then ( ( data )  =>  this . displayWeather ( data ) ) ;
    } ,

    displayWeather : fonction ( données )  {
        const  { nom }  =  données ;
        const  { icône , description }  =  données . météo [ 0 ] ;
        const  { temp , humidité }  =  données . principal ;
        const  { vitesse }  =  données . vent ;
        documenter . querySelector ( ".ville" ) . innerText  =  "Météo dans "  +  nom ;
        documenter . querySelector ( ".icon" ) . src  =  "https://openweathermap.org/img/wn/"  +  icône  +  ".png" ;
        documenter . querySelector ( ".description" ) . TexteIntérieur  =  description ;
        documenter . querySelector ( ".temp" ) . Texteintérieur  =  temp  +  "°C" ;
        documenter . querySelector ( ".humidité" ) . innerText  =  "Humidité : "  +  humidité  +  "%" ;
        documenter . querySelector ( ".wind" ) . innerText  =  "Vitesse du vent : "  +  vitesse  +  " km/h" ;
        documenter . querySelector ( ".weather" ) . classList . supprimer ( "chargement" ) ;
        documenter . corps . style . backgroundImage  =  "url('https://source.unsplash.com/1600x900/?"  +  nom  +  "')"
    } ,

} ;

