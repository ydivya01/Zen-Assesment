let div = document.createElement("div")
document.body.appendChild(div)


let xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users")
xhr.send();

xhr.onload = function () {
    if (xhr.status == 200) {
        let users = JSON.parse(xhr.response)

        let p1 = document.createElement("p")
        p1.innerText = "FOR QUESTION"
        div.appendChild(p1)


        for (let i = 0; i < users.length; i++) {
            let p = document.createElement("p")
            p.innerHTML = `<b> ${users[i].id} </b> : <b> ${users[i].website} </b>`
            div.appendChild(p)
        }

        let p2 = document.createElement("p")
        p2.innerText = "FOR IN QUESTION"
        div.appendChild(p2)



        for (var i in users) {
            let p = document.createElement("p")
            p.innerHTML = `<b> ${users[i].username} </b> : <b> ${users[i].email} </b>`
            div.appendChild(p)
        }

        let p3 = document.createElement("p")
        p3.innerText = "FOR OF QUESTION"
        div.appendChild(p3)

        for (var i of users) {
            let p = document.createElement("p")
            p.innerHTML = `<b> ${i.name} </b> : <b> ${i.phone} </b>`
            div.appendChild(p)
        }

        let p4 = document.createElement("p")
        p4.innerText = "FOR EACH QUESTION"
        div.appendChild(p4)

        users.forEach((value , index) => {
            let p = document.createElement("p")
            p.innerHTML = `<b> ${index+1} </b> : <b> ${value.address.city} </b> : <b> ${value.company.catchPhrase} </b>`
            div.appendChild(p)
        })

    } else {
        console.log("Error 404")
    }
}


   // Question 2
    //Resume
    const myResume = {
        "name": "Divya Yadav",
        "email": "ydivya01@gmail.com",
        "phone": "+91 7016886344",
        "degree": "Btech in ECE",
        "summary": "Detail oriented IT professional with experience of 4.8 years working as exchange server and Exchange online.",
        "location": {
          "address": "House no 99, Sector 1 ,Defence Colony",
          "postalCode": "133001",
          "city": "Ambala Cantt",
          "countryCode": "IN",
          "region": "Haryana"
      },
      "Work":
        {
          "company": "Concentrix",
          "position": "SR. Advisor 1, Technical Support",
          "startDate": "27 - 07 - 2021",
          "endDate": "Currently working",
          "summary": "Work for our client Microsoft where we handle and troubleshoot on exchange server and exchange online.",
          "Certification" :"MS203 - messaging"
            
          
    }}


   
    


