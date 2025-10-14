

function getRandomMeme(){

    const setMeme = (link) => {
        document.querySelector("#meme").src = link;
    }

    const selectRandom = (arr) => {
        const len = arr.length;
        const index = Math.round(Math.random() * len);
        return arr[index];
    }

    fetch("https://api.imgflip.com/get_memes")
        .then(result => result.json())
        .then(data => setMeme(selectRandom(data.data.memes).url))
        .catch(error => console.log(`Error: ${error}`));

}

function cycle(delay){
    setTimeout(() => {
        getRandomMeme();
        cycle(delay)
    }, delay)
}

getRandomMeme();
cycle(10000);



