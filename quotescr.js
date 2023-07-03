function getGreeting() {
    var time = new Date().getHours();
    var greeting;
  
    if (time >= 5 && time < 12) {
      greeting = "morning";
    } else if (time >= 12 && time < 18) {
      greeting = "afternoon";
    } else {
      greeting = "evening";
    }
  
    return greeting;
  }


const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button");



var greeting = getGreeting();
document.getElementById("greeting").textContent = "Let's start our " + greeting + " with a new quote";



function randomQuote(){
    quoteBtn.classList.add("loading")
    quoteBtn.innerText = "Loading Quote..";
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        console.log(result);
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading")
    });   
}


quoteBtn.addEventListener("click", randomQuote);
