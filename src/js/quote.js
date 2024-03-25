//Javascriptpro_
//Dont forget to follow me on github,instagram and codepen
let quote = document.querySelector('.container .quote');
let author = document.querySelector('.container .author span');
let refreshBtn = document.querySelector('.container .all-btns .getquote-btn');
let copyBtn = document.querySelector('.container .all-btns .copy-btn');
let speakBtn = document.querySelector('.container .all-btns .speak-btn');
let twittBtn = document.querySelector('.container .all-btns .twitt-btn');
let copyText = document.querySelector('.copy-btn span');
let copyIcon = document.querySelector('.copy-btn i');

const url = "https://api.quotable.io/random";

let getQuote = () => {
    quote.innerHTML = 'Abaraca Dabara';
    author.innerHTML = '-loading...'
    fetch(url).then((res) => res.json()).then((data) => {
        quote.innerHTML = data.content;
        author.innerHTML = '- ' + data.author;
    })
}

let copyQuote = () => {
    navigator.clipboard.writeText(quote.textContent);
    copyIcon.style.display = 'none';
    copyText.style.display = 'block';
    setTimeout(() => {
        copyIcon.style.display = 'block';
        copyText.style.display = 'none';
    }, 700)
}

let speakQuote = () => {
    let speech = new SpeechSynthesisUtterance();
    speech.text = `${quote.textContent} by ${author.textContent}`;
    speechSynthesis.speak(speech)
}

let twittQuote = () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText} ${author.innerText}`;
    window.open(tweetUrl, "_blank");
}

getQuote();
refreshBtn.addEventListener('click', getQuote);
copyBtn.addEventListener('click', copyQuote);
speakBtn.addEventListener('click', speakQuote);
twittBtn.addEventListener('click', twittQuote);
