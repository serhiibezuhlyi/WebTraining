
async function recursiveFetch(startNumber, currentNumber){
    if (startNumber+3 === currentNumber){
        return;
    }

    const setResult = (resultNum, text) => {
        document.querySelector(`#result${resultNum}`).textContent = text
    }

    fetch(`https://jsonplaceholder.typicode.com/posts/${currentNumber}`)
        .then(response => response.json())
        .then(data => {
            setResult(currentNumber, JSON.stringify(data));
            recursiveFetch(startNumber, currentNumber+1);
        })
        .catch(error => setResult(1, error))
}

function clearResult(){
    document.querySelector(`#result1`).textContent = "";
    document.querySelector(`#result2`).textContent = "";
    document.querySelector(`#result3`).textContent = "";
}


document.querySelector("button").addEventListener('click', () => {
    clearResult();
    recursiveFetch(1, 1)
});