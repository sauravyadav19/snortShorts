let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=twopart";


//This function fetches a two part joke using v2.jokeapi.dev api
function fetchJoke(url){
    fetch(url)
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
        console.log(setup,delivery);
    })
    .catch((error)=>{
        console.log(error);

    })
}

fetchJoke(url);