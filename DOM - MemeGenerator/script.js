//when page loads
const memeButton = document.getElementById("memeButton");
const memeImage = document.getElementById("memeImage");

//Event listner
memeButton.addEventListener("click", generate);


const memes = [
    "https://cdn.memes.com/up/71558571535638926/i/1737695802659.jpg",
    "https://cdn.memes.com/up/71558571535638926/i/1738481421959.jpg",
    "https://cdn.memes.com/up/71558571535638926/i/1738481656148.jpg",
    "https://cdn.memes.com/up/71558571535638926/i/1738481610918.jpg"
];

function generate(){
    let randomNumber= Math.floor(Math.random()* memes.length);
    const randomMeme = memes[randomNumber];
    memeImage.src = randomMeme;
    memeImage.style.display = "block";
    console.log("generator worked!")
};

