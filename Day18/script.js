var result = [];

async function getResponse() {
    let data = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags,cca3,latlng");
    let result = await data.json();
    console.log(result)

    contentDisplay(result)

    
}
    function contentDisplay(result){

      

        for(i=0;i<=result.length-1;i++){

          var fullCard = document.createElement("div");
          fullCard.setAttribute("class", "card");
          fullCard.setAttribute("id","img")
          fullCard.setAttribute("style", "width: 18rem;");
          var fullCardinput = document.getElementById("cards");
          fullCardinput.appendChild(fullCard)

          var h5Tag = document.createElement("h5");
          h5Tag.setAttribute("class","card-title");
          h5Tag.innerText = result[i].name.common
          fullCard.appendChild(h5Tag)
          console.log(result[i].name.common)
          
          var imgtag = document.createElement("img")
          imgtag.setAttribute("src",result[i].flags.png)
          imgtag.setAttribute("class","card-img-top")
          imgtag.setAttribute("alt","flag")
          fullCard.appendChild(imgtag)
          console.log(result[i].name.common)

          var ulTag = document.createElement("ul");
          ulTag.setAttribute("class","list-group list-group-flush");
          ulTag.setAttribute("id", "list")
          fullCard.appendChild(ulTag)

          var liTag = document.createElement("li");
          liTag.setAttribute("class","list-group-item");
          liTag.innerText = result[i].capital
          ulTag.appendChild(liTag)
          console.log(result[i].capital)

          var liTag = document.createElement("li");
          liTag.setAttribute("class","list-group-item");
          liTag.innerText = result[i].region
          ulTag.appendChild(liTag)
          console.log(result[i].region)

          var liTag = document.createElement("li");
          liTag.setAttribute("class","list-group-item");
          liTag.innerText = result[i].cca3
          ulTag.appendChild(liTag)
          console.log(result[i].cca3)

          var button = document.createElement("button");
          button.setAttribute("type","button");
          button.setAttribute("class","btn btn-primary");
          button.setAttribute("data-toggle","modal");
          button.setAttribute("data-target","#exampleModal");
          button.setAttribute("value",result[i].latlng)
          button.addEventListener("click", getWeatherDetails )
          button.innerText = "Click for Weather"
          fullCard.appendChild(button)

        }

          var modal = document.createElement("div");
          modal.setAttribute("class","modal fade")
          modal.setAttribute("id","exampleModal")
          modal.setAttribute("tabindex","-1")
          modal.setAttribute("role","dialog")
          modal.setAttribute("aria-labelledby","exampleModalLabel")
          modal.setAttribute("aria-hidden","true")
          document.body.appendChild(modal)

          var modal1 = document.createElement("div");
          modal1.setAttribute("class","modal-dialog")
          modal1.setAttribute("role","document")
          modal.appendChild(modal1)

          var modal2 = document.createElement("div");
          modal2.setAttribute("class","modal-content")
          modal1.appendChild(modal2)

          var modal3 = document.createElement("div");
          modal3.setAttribute("class","modal-header")
          modal2.appendChild(modal3)

          var h5 = document.createElement("h5");
          h5.setAttribute("class","modal-title")
          h5.setAttribute("id","exampleModalLabel")
          h5.innerText = `Weather Details`
          modal3.appendChild(h5)   

          var modalBody = document.createElement("div");
          modalBody.setAttribute("class", "body");
          modal3.appendChild(modalBody)
        
    }  
getResponse()

getWeatherDetails = (t) => {

  let value = [t.target.value]
  latlng = value[0].split(",")
  getResponse()
  
  async function getResponse() {
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latlng[0]}&lon=${latlng[1]}&appid=5c8bf559318111ce0a5b016cb6f92285`);
    let result = await data.json();
    console.log(result)   

    
    var clear = document.getElementsByClassName("body")[0];
    clear.innerHTML = ""


  var weatherDetails = document.createElement("div");
    weatherDetails.setAttribute("class","modal-body");

    weatherDetails.innerText = `Weather: ${result.weather[0].description} 
                                Min Temp: ${result.main.temp_min}
                                Max Temp: ${result.main.temp_max}
                                Wind Speed: ${result.wind.speed}`;
    var weatherDetailsOutput = document.getElementsByClassName("body")[0];
    weatherDetailsOutput.appendChild(weatherDetails);

}}