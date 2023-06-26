let div = document.createElement("div")
document.body.appendChild(div)


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send();

xhr.onload = function () {
    if (xhr.status == 200) {
        let users = JSON.parse(xhr.response)
       let newArr = users.filter(value =>
            value.continents == 'Asia'
        ).forEach(value =>console.log(value.capital))
    console.log(newArr)
    
    
    
    }}