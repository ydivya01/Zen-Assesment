let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all")
xhr.send();

let div = document.createElement("div")
div.innerHTML = `const object1 = { name: 'ABC', address: 'India'}; 
      
  const object2 = {address: 'India',name: 'ABC'}; 
      
  JSON.stringify(object1) === JSON.stringify(object2)
  // false 
      
  _.isEqual(object1, object2)
  // true  
  <b>This will not consider the order of the keys in object and check for the equality of object</b>`
document.body.appendChild(div)


xhr.onload = function () {
    if (xhr.status == 200) {
        let countryOutput = JSON.parse(xhr.response)
        for ( element of countryOutput){
            let p = document.createElement("p")
            p.innerHTML = `<b> NAME </b>${element.name.common} , <b> REGION </b>${element.region} , <b> SUBREGION </b>${element.subregion} , <b> POPULATION </b> ${element.population}`
            //console.log(element.flag)
            div.appendChild(p)
        }
    }
    else{
        console.log("ERROR")
    }
}


// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona”, “Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//     ]
    
//     function dataHandling(input){
//     for (var i = 0; i < input.length; i++) {
//     let p1 = document.createElement("p")
//     console.log(input[i])
//     p1.innerText = `${input[i]}`
//     div.appendChild(p1)
    
//     }
//     }
    
//     dataHandling(input);
