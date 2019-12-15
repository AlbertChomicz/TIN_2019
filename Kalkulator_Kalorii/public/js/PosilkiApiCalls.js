
const ApiPosilekURL = 'http://localhost:3000/api/products/posilek_add';
var ApiPosilekListUrL = 'http://localhost:3000/api/products/posilek_list';
var userApiEditPosilek = 'http://localhost:3000/api/products/posilek_edit';
var userApiDeletePosilek = 'http://localhost:3000/api/products/posilek_list';


function editPosilekCall(ProductData){
    console.log("EDYTUJEMY POSILEK"+ProductData)
    const req = new XMLHttpRequest;
    req.open('POST', userApiEditPosilek, true);

    const ProductDataString = JSON.stringify(ProductData);
    console.log("EDYTUJEMY POSILEK"+ProductDataString)
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(ProductDataString);
    console.log("wyslano:"+userApiEditPosilek)
}

function addPosilekCall(ProductData) {
    const req = new XMLHttpRequest;
    req.open('POST', ApiPosilekURL, true);

    const ProductDataString = JSON.stringify(ProductData);
    console.log(`addUser() userData: ${ProductDataString}`);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
   // console.log(ApiPosilekURL);
    //console.log(ProductDataString);
    req.send(ProductDataString);
}

function getPosilekListCall(callback) {
    const req = new XMLHttpRequest();
    req.open('GET', ApiPosilekListUrL, true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200) {
                const respText = req.responseText;
                // dump(respText);
                const PosilekData = JSON.parse(respText);
                callback(PosilekData);
                // console.log(`users json: ${JSON.stringify(userData)}`);
            } else {
                dump("Błąd podczas ładowania strony\n");
            }
        }
    };
    req.send(null);
}

function deletePosilekCall(id){
    const req = new XMLHttpRequest;
    console.log(userApiDeletePosilek+`/${id}`)
    req.open('DELETE', userApiDeletePosilek+`/${id}`, true);
    req.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
    req.send(null);
}
