

async function error1(){
    const errorRand = Math.random();

    if (errorRand >= 0.5){
        throw new Error("You should update your system");
    }
    return "Your system has the newest update";
}

async function error2(){
    const errorRand = Math.random();

    if (errorRand >= 0.5){
        throw new Error("You should CHANGE your system:)))))");
    }
    return "Your system is good)";
}


async function launch(){

    const setResult = (text) => {
        document.querySelector("#result").textContent = text;
    }

    Promise.any([error1(), error2()])
        .then(result => setResult(result))
        .catch(error => setResult(`ERROR: ${error}`));
}


document.querySelector('button').addEventListener('click', () => {
    launch()
});