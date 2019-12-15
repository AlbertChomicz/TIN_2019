
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
var zapisz_zmiany = document.getElementById('zapisz_zmiany');

var wegle_input = document.getElementById('wegle_input');
var bialko_input = document.getElementById('bialko_input');
var tluszcze_input = document.getElementById('tluszcze_input');

var produkt_usun = document.getElementById('produkt_usun');

var aktualnie_wybrany = null;

function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}


var wybierz = document.getElementById('wybierz');

getProductListCall(renderProductList);


function renderProductList(ProductList) {

    //usuwamy istniejące wiersze z danymi z widoku
    /*
    while (lista_produktów.firstChild) {
        tbodyUsers.removeChild(tbodyUsers.firstChild);
    }
    */
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

    

    var zaznaczony_element = lista_produktow.selectedIndex;
    
    
    if (zaznaczony_element == -1) {
      //  block of code to be executed if the condition is true

      lista_produktow.style.border = '1px solid red';
    }
    else{

      lista_produktow.style.border = '0px solid red';
    
    var zaznaczony_element = lista_produktow.options[lista_produktow.selectedIndex].dataset.indexNumber;


   userApiBaseUrl = `http://localhost:3000/api/products/${zaznaczony_element}`;

   getProductListCall(uzupelnij_makro_wybranemu_produktowi);
   return false;
}
};


function uzupelnij_makro_wybranemu_produktowi(ProductList){



    produkty_weglowodany.innerHTML = `Węglowodany: <br><br> ${ProductList.carbo}`;
    produkty_bialko.innerHTML = `Białko: <br><br> ${ProductList.protein}`;
    produkty_tluszcze.innerHTML = `Tłuszcze: <br><br> ${ProductList.fat}`;
    suma_kalorii = ProductList.carbo*4+ProductList.protein*4+ProductList.fat*9;
    produkty_kcal.innerHTML = `kcal: <br><br> ${suma_kalorii}`
    

    zdjecie_produktu.src = ProductList.photo_path;
    
    aktualnie_wybrany = ProductList;
 

}

zapisz_zmiany.onclick = function(){
 
  
  saveForm(editProductCall);
  console.log(editProductCall);
  window.alert(`Zmiany zapisano`);
  window.location.reload(true);
  return false;



}


function saveForm(apiCall) {

  console.log(aktualnie_wybrany)

  const ProductData = {

    Name: aktualnie_wybrany.Name,
    id : aktualnie_wybrany.id,
    carbo: wegle_input.value,
    protein: bialko_input.value,
    fat: tluszcze_input.value,
    category: aktualnie_wybrany.value,
    photo_path: aktualnie_wybrany.photo_path
  }
  apiCall(ProductData);

  return false;
}

    
produkt_usun.onclick = function(){
  
  if(aktualnie_wybrany == null){
    window.alert("Nie wybrałeś produktu");
  }
  else {
  console.log(aktualnie_wybrany.id);
  let name = aktualnie_wybrany.Name;
  deleteProductCall(aktualnie_wybrany.id);
  window.location.reload(true);
  window.alert(`Produkt ${name} usunięto`);
  }
 // window.alert("sometext");
}




