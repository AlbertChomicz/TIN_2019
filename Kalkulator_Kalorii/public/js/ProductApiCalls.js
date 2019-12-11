const userApiPhotoAdd = 'http://localhost:3000/api/products/photoupload';

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
    // fetch(userApiPhotoAdd, {
    //     method: 'POST',
    //     body: PhotoData,
    //   }).then(response => {
    //     console.log(response);
    //   })

}

function addProductCall(ProductData) {
    const req = new XMLHttpRequest;
    req.open('POST', userApiBaseUrl, true);

    const ProductDataString = JSON.stringify(ProductData);
    console.log(`addUser() userData: ${ProductDataString}`);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(ProductDataString);
}