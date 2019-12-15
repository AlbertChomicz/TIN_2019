
var userApiBaseUrl = 'http://localhost:3000/api/products';
var lista_produktów = document.getElementById('lista_produktow');

var produkty_weglowodany = document.getElementById('produkty_weglowodany');
var produkty_bialko = document.getElementById('produkty_bialko');
var produkty_tluszcze = document.getElementById('produkty_tluszcze');
var produkty_kcal = document.getElementById('produkty_kcal');
var zdjecie_produktu = document.getElementById('zdjecie_produktu');

var produkty_weglowodany_nowa_wartosc = document.getElementById('produkty_weglowodany_nowa_wartosc');
var produkty_bialko_nowa_wartosc = document.getElementById('produkty_bialko_nowa_wartosc');
var produkty_tluszcze_nowa_wartosc = document.getElementById('produkty_tluszcze_nowa_wartosc');
var produkty_kcal_nowa_wartosc = document.getElementById('produkty_kcal_nowa_wartosc');

var produkty_gram_input = document.getElementById('produkty_gram_input');
var produkty_gram_przelicznik_submit2 = document.getElementById('produkty_gram_przelicznik_submit');
var produkt_sortuj = document.getElementById('produkt_sortuj');
var ProductListArray = [];
var aktualnie_wybrany = null;

function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}


produkt_sortuj.onclick = function(){
  Sortuj();
  return false;
}

function Sortuj(){
  ProductListArray = ProductListArray.sort((a, b) => (a.Name.toLowerCase() > b.Name.toLowerCase()) ? 1 : -1)
  console.log(ProductListArray);
  renderProductList(ProductListArray);
}


var wybierz = document.getElementById('wybierz');

getProductListCall(saveProductList);



function saveProductList(ProductList){
  ProductListArray = ProductList;
  console.log(ProductList)
  console.log(ProductListArray)
  renderProductList(ProductListArray);
 
}



function renderProductList(ProductList) {

    //usuwamy istniejące wiersze z danymi z widoku
    /*
    while (lista_produktów.firstChild) {
        tbodyUsers.removeChild(tbodyUsers.firstChild);
    }
    */
   console.log(ProductList);
    //tworzymy wiersze tabeli z danymi użytkowników na podstawie listy obiektów
    let productsHtml = "";
    ProductList.forEach(p => {
        productsHtml += `
        <option value="m"  data-index-number="${p.id}">${p.Name}</option>
        `;
    });
    lista_produktów.innerHTML = productsHtml;

}


wybierz.onclick = function(){

    let lista_produktow = document.getElementById('lista_produktow');
    let wybierz_label_error = document.getElementById('wybierz_label_error');

    var zaznaczony_element = lista_produktow.selectedIndex;
    
    
    if (zaznaczony_element == -1) {
      //  block of code to be executed if the condition is true
      wybierz_label_error.style.visibility='visible';
      lista_produktow.style.border = '1px solid red';
    }
    else{
      wybierz_label_error.style.visibility='hidden';
      lista_produktow.style.border = '0px solid red';
    
    var zaznaczony_element = lista_produktow.options[lista_produktow.selectedIndex].dataset.indexNumber;

    console.log(zaznaczony_element)
    console.log(`http://localhost:3000/api/products/${zaznaczony_element}`)
   userApiBaseUrl = `http://localhost:3000/api/products/${zaznaczony_element}`;

   getProductListCall(uzupelnij_makro_wybranemu_produktowi);
   
}
};


function uzupelnij_makro_wybranemu_produktowi(ProductList){




    produkty_weglowodany.innerHTML = `Węglowodany: <br><br> ${ProductList.carbo}`;
    produkty_bialko.innerHTML = `Białko: <br><br> ${ProductList.protein}`;
    produkty_tluszcze.innerHTML = `Tłuszcze: <br><br> ${ProductList.fat}`;
    suma_kalorii = ProductList.carbo*4+ProductList.protein*4+ProductList.fat*9;
    produkty_kcal.innerHTML = `kcal: <br><br> ${suma_kalorii}`
    
    console.log(ProductList.photo_path)
    zdjecie_produktu.src = ProductList.photo_path;
    
    aktualnie_wybrany = ProductList;
    przeliczenie_makroskladnikow(ProductList);

}


function przeliczenie_makroskladnikow(ProductList){
   var przelicznik=   parseInt(produkty_gram_input.value)/100;
    console.log(przelicznik);

    if (przelicznik != null && przelicznik>0) {
        produkty_weglowodany_nowa_wartosc.innerHTML = `Węglowodany: <br><br> ${Round(ProductList.carbo*przelicznik,1)}`;
        produkty_bialko_nowa_wartosc.innerHTML = `Białko: <br><br> ${Round(ProductList.protein*przelicznik,1)}`;
        produkty_tluszcze_nowa_wartosc.innerHTML = `Tłuszcze: <br><br> ${Round(ProductList.fat*przelicznik,1)}`;
        suma_kalorii_dwa = (ProductList.carbo*4+ProductList.protein*4+ProductList.fat*9)*przelicznik;
        produkty_kcal_nowa_wartosc.innerHTML = `kcal: <br><br> ${Round(suma_kalorii_dwa,1)}`
        }
        else{
            produkty_weglowodany_nowa_wartosc.innerHTML = `Węglowodany: <br><br> ${Round(ProductList.carbo,1)}`;
            produkty_bialko_nowa_wartosc.innerHTML = `Białko: <br><br> ${Round(ProductList.protein,1)}`;
            produkty_tluszcze_nowa_wartosc.innerHTML = `Tłuszcze: <br><br> ${Round(ProductList.fat,1)}`;
            suma_kalorii_dwa = (ProductList.carbo*4+ProductList.protein*4+ProductList.fat*9);
            produkty_kcal_nowa_wartosc.innerHTML = `kcal: <br><br> ${Round(suma_kalorii_dwa,1)}`
        }
}

produkty_gram_przelicznik_submit2.onclick = function(){



    let produkty_gram_przelicznik_error = document.getElementById('produkty_gram_przelicznik_error');
    let produkty_gram_input = document.getElementById('produkty_gram_input');
    
    
    var input=   parseInt(produkty_gram_input.value);
    console.log(Number.isInteger(input))
    console.log(produkty_gram_input.value);
  
    if (Number.isInteger(input)) {
      //  block of code to be executed if the condition is true
      produkty_gram_przelicznik_error.style.visibility='hidden';
      produkty_gram_input.style.border = '0px solid red';

      var przelicznik=   parseInt(produkty_gram_input.value)/100;
      console.log(produkty_weglowodany.innerHTML);
      produkty_weglowodany_nowa_wartosc.innerHTML = `Węglowodany: <br><br> ${Round(aktualnie_wybrany.carbo*przelicznik,1)}`;
      produkty_bialko_nowa_wartosc.innerHTML = `Białko: <br><br> ${Round(aktualnie_wybrany.protein*przelicznik,1)}`;
      produkty_tluszcze_nowa_wartosc.innerHTML = `Tłuszcze: <br><br> ${Round(aktualnie_wybrany.fat*przelicznik,1)}`;
      suma_kalorii_dwa = (aktualnie_wybrany.carbo*4+aktualnie_wybrany.protein*4+aktualnie_wybrany.fat*9);
      produkty_kcal_nowa_wartosc.innerHTML = `kcal: <br><br> ${Round(suma_kalorii_dwa*przelicznik,1)}`
  
    }
    else{
      produkty_gram_input.style.border = '1px solid red';
      produkty_gram_przelicznik_error.style.visibility='visible';
    }


    

}

