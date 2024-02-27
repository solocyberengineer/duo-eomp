let endpoint = document.querySelector('#endpoint');
let method = document.querySelector('#method');
let sendRequest = document.querySelector('#sendRequest');
let path = document.querySelector('#path');
let requestBody = document.querySelector('#requestBody');
let responseOutput = document.querySelector('#responseOutput');
let responseBodyJson = document.querySelector('[for="responseBodyJson"]');
let param = document.querySelector('#param');
let error = document.querySelector('#error');
let errorMsg = document.querySelector('#errorMsg');

endpoint.textContent = window.location.origin;

let URL = `${window.location.origin}${path.value}${param.value ? param.value : ''}`;
let METHOD = method.value;


path.addEventListener('change', (e)=>{
    let example;
    URL = `${window.location.origin}${path.value}${(param.value) ? param.value : ''}`;

    switch( path.value ){
        case '/user/register':
            example = {
                firstName: "somefirstname",
                lastName: "somelastname",
                userAge: 30,
                gender: "female",
                userRole: "user",
                emailAdd: "someemailaddress@gmail.com",
                userPass: "someuserpassword",
                userProfile: "somebase64Image"
            }
            requestBody.textContent = JSON.stringify( example, null, 4 );
            break;
        case '/user/updateuser':
            example = {
                userPass: "someuserpassword",
                gender: "male"
            }
            requestBody.textContent = JSON.stringify( example, null, 4 );
            break;
        case '/user/deleteuser':
            example = {
                userPass: "someuserpassword"
            }
            requestBody.textContent = JSON.stringify( example, null, 4 );
            break;
        case '/user/login':
            example = {
                emailAdd: "someemailaddress@gmail.com",
                userPass: "someuserpassword"
            }
            requestBody.textContent = JSON.stringify( example, null, 4 );
            break;
        case '/product/newProduct':
            example = {
                prodName: "some product name",
                quantity: 20,
                amount: 63.35,
                category: "some product category",
                prodUrl: "https://someImageUrl"
            }
            requestBody.textContent = JSON.stringify( example, null, 4 );
            break;
        case '/product/editProduct':
            example = {
                prodName: "some product name",
                quantity: 20,
                amount: 63.35,
                category: "some product category",
                prodUrl: "https://someImageUrl"
            }
            requestBody.textContent = JSON.stringify( example, null, 4 );
            break;
        default:
            requestBody.textContent = '{}'
            break;
    }
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
    try {
        let response = await fetch(URL, requestParams)
        if(response.status != 200){
            error.style['display'] = 'block';
            errorMsg.style['display'] = 'block';
            errorMsg.textContent = `${response.status}: ${response.statusText}`;
            return;
        }
        responseOutput.textContent = JSON.stringify(await response.json(), null, 2);
        responseBodyJson.textContent = '';
        error.style['display'] = 'none';
        errorMsg.style['display'] = 'none';
    } catch(e) {
        error.style['display'] = 'block';
        errorMsg.style['display'] = 'block';
        errorMsg.textContent = e.toString();
    }
})
requestBody.addEventListener('keydown', (event)=>{
    if(event.key == 'Tab') {
        event.preventDefault();
        const {value, selectionStart, selectionEnd} = event.target;
        event.target.value = `${value.substring(0, selectionEnd)}\t${value.substring(selectionEnd)}`;
        event.target.selectionStart = event.target.selectionEnd = selectionEnd + 1;
    };
})
