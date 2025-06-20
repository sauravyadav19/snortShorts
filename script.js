let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=twopart";


//This function fetches a two part joke using v2.jokeapi.dev api
function fetchJoke(url){
    return fetch(url)
    .then(responsePromise=>{
        //respnonsePromise is result of the network request that we make was successfull
        // but it still does not contain the body (joke) as we are looking for rather we have
        // to go through the process for parsing it, responsePromise has a method .json,which help
        // us extactly do that..but that is also a async promise because the data has to be read from
        // the memory or the network buffer, so we have to add another .then to get the result of this promise
        return responsePromise.json();
    })
    .then((parsedBody)=>{
        //this parsedBody is the result of the responsePromise.json() parsing the data and on a successfull
        //resolve returing the value {responsePromise.json() is async procees that why we are chaining it with .then again}
        const setup = parsedBody.setup;
        const delivery = parsedBody.delivery;
        return {setup,delivery};
    }) 
    .catch((error)=>{
        return {setup: '', delivery:''};

    })
}


// after some node version greater than 14, we are not allowed to make the top Level function 
// a async function so to get away with it we have a created a function main and then we have called
// it inside the top level function; we could have name it anything but main here sounded  a little
// more coherent

// async function main(){
//     const {setup, delivery} = await fetchJoke(url);
//     return {setup, delivery};
    
// }




const jokeSetup = document.querySelector("#jokeSetup");
const jokeDelivery = document.querySelector("#jokeDelivery");

document.querySelector("#newJokeButton").addEventListener('click',async ()=>{
    const joke = await fetchJoke(url);
    jokeSetup.textContent = joke.setup;
    jokeDelivery.textContent = joke.delivery;
})