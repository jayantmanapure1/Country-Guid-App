let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");

console.log("jayant");

async function checkCountryStatus(countryName) {
  const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);

  if(response.status == 404){
   document.querySelector(".error").style.display="block";
   document.querySelector("#result").style.display= "none";

  }else{
  const data = await response.json();
  console.log(data);

  document.querySelector("img").src = data[0].flags.svg;
  document.querySelector("h2").innerHTML = data[0].name.common;
  document.querySelector(".capital").innerHTML = data[0].capital[0];
  document.querySelector(".continent").innerHTML = data[0].continent;
  document.querySelector(".population").innerHTML = data[0].population;
  document.querySelector(".currency").innerHTML = `${data[0].currencies[Object.keys(data[0].currencies)[0]].name} - ${Object.keys(data[0].currencies)[0]}`;
  document.querySelector(".languages").innerHTML = Object.values(data[0].languages).join(", ");

  
   document.querySelector(".error").style.display="none";
   document.querySelector("#result").style.display= "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkCountryStatus(countryInp.value);
});
