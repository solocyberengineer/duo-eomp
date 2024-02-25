let endpoint = document.querySelector('#endpoint');
let method = document.querySelector('#method');
let sendRequest = document.querySelector('#sendRequest');
let path = document.querySelector('#path');
let requestBody = document.querySelector('#requestBody');
let responseOutput = document.querySelector('#responseOutput');
let responseBodyJson = document.querySelector('[for="responseBodyJson"]');
let param = document.querySelector('#param');

endpoint.textContent = window.location.origin;

let URL = `${window.location.origin}${path.value}${param.value ? param.value : ''}`;
let METHOD = method.value;
console.log(METHOD)


path.addEventListener('change', (e)=>{
    URL = `${window.location.origin}${path.value}${(param.value) ? param.value : ''}`;

})
method.addEventListener('change', (e)=>{
    METHOD = method.value;
})
param.addEventListener('input', ()=>{
    URL = `${window.location.origin}${path.value}${(param.value) ? param.value : ''}`;
})
sendRequest.addEventListener('click', async ()=>{
    let body = JSON.parse(requestBody.value);
    let requestParams = {
        method: METHOD,
        headers: {
            "Content-Type": "application/json"
        }
    }
    if( METHOD == 'POST' || METHOD == 'PATCH' ) {
        requestParams['body'] = JSON.stringify(body);
    }
    let response = await fetch(URL, requestParams)
    responseOutput.textContent = JSON.stringify(await response.json(), null, 2);
    responseBodyJson.textContent = '';
})
requestBody.addEventListener('keydown', (event)=>{
    if(event.key == 'Tab') {
        event.preventDefault();
        const {value, selectionStart, selectionEnd} = event.target;
        event.target.value = `${value.substring(0, selectionEnd)}\t${value.substring(selectionEnd)}`;
        event.target.selectionStart = event.target.selectionEnd = selectionEnd + 1;
    };
})
