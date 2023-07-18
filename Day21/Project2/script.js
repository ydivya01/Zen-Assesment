let shadow = document.querySelector(".content");
let fullpage = document.querySelector(".container");
let quote = document.querySelector(".quote");
let authorwrote = document.querySelector(".author");

function random() {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  console.log(randomColor);
  shadow.style = `border: 2px solid #${randomColor};
  box-shadow: #${randomColor} 0px 2px 4px, #${randomColor} 0px 7px 13px -3px,
    #${randomColor} 0px 12px 30px;`;
}

const randomId = ()=>{
    let ranID = Math.floor(Math.random() * 10).toString(16);
    return ranID
}


// const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


function randomQuote() {
  fetch(`https://api.seriesquotes.10cyrilc.me/quote/?series=game_of_thrones&count=50&id=${randomId()}&all=true`)
    .then((data) => data.json())
    .then((obj) => {
      random();
      quote.textContent = obj.quote;
      authorwrote.textContent = `--${obj.author}`;
    });
}


fullpage.addEventListener("click", randomQuote);
randomQuote();