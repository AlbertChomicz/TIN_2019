const userApiPhotoAdd = 'http://localhost:3000/api/products/photoupload';
const userApiEditProduct = 'http://localhost:3000/api/products/product_edit';
var userApiBaseUrl = 'http://localhost:3000/api/products';
var userApiDeleteProduct = 'http://localhost:3000/api/products';


function getProductListCall(callback) {
    const req = new XMLHttpRequest();
    req.open('GET', userApiBaseUrl, true);
    req.onreadystatechange = function (aEvt) {
        if (req.readyState == 4) {
            if (req.status == 200) {
                const respText = req.responseText;
                // dump(respText);
                const ProductData = JSON.parse(respText);
                callback(ProductData);
                // console.log(`users json: ${JSON.stringify(userData)}`);
            } else {
                dump("Błąd podczas ładowania strony\n");
            }
        }
    };
    req.send(null);
}

function addPhotoCall(PhotoData){

    const req = new XMLHttpRequest;
    req.open('POST', userApiPhotoAdd, true);
    req.send(PhotoData);
}

function editProductCall(ProductData){
    console.log(ProductData)
    const req = new XMLHttpRequest;
    req.open('POST', userApiEditProduct, true);

    const ProductDataString = JSON.stringify(ProductData);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(ProductDataString);
}


function addProductCall(ProductData) {
    const req = new XMLHttpRequest;
    req.open('POST', userApiBaseUrl, true);

    const ProductDataString = JSON.stringify(ProductData);
    console.log(`addUser() userData: ${ProductDataString}`);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(ProductDataString);
}

function deleteProductCall(id){
    const req = new XMLHttpRequest;
    
    req.open('DELETE', userApiDeleteProduct+`/${id}`, true);
    req.setRequestHeader("Content-Type", "text/html;charset=UTF-8");
    req.send(null);
}

