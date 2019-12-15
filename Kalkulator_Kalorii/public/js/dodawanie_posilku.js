var przepis_textarea = document.getElementById('przepis_textarea');
var brak_opisu_error = document.getElementById('brak_opisu_error');
var nazwa_error = document.getElementById('nazwa_error');

var nazwa_posilku_input = document.getElementById('nazwa_posilku_input');
var zdjecie_label_input = document.getElementById('zdjecie_label_input');
var zdjecie = document.getElementById('000002');
var zdjecie_error = document.getElementById('zdjecie_error');

var produkt_dodaj = document.getElementById('produkt_dodaj');
var posilek_dodaj = document.getElementById('posilek_dodaj');
var lista_produktów = document.getElementById('lista_produktow');
var gramatura_input = document.getElementById('gramatura_input');
var tbody_ingredients = document.getElementById('tbody_ingredients');

var produkty_weglowodany_nowa_wartosc = document.getElementById('produkty_weglowodany_nowa_wartosc');
var produkty_bialko_nowa_wartosc = document.getElementById('produkty_bialko_nowa_wartosc');
var produkty_tluszcze_nowa_wartosc = document.getElementById('produkty_tluszcze_nowa_wartosc');
var produkty_kcal_nowa_wartosc = document.getElementById('produkty_kcal_nowa_wartosc');

var aktualnie_wybrany = null;
var produkt_usun = document.getElementById('usun_posilek');

var skladniki_posilku = [];







function Round(n, k) {
  var factor = Math.pow(10, k);
  return Math.round(n * factor) / factor;
}


function required(inputtx) {
  if (inputtx.value.length == 0) {
    return true;
  }
  return false;
}

function validatepath(path) {
  var re = /^.+\.(([jJ][pP][gG]))$/;
  return re.test(path);
}

getProductListCall(renderProductList);

function renderProductList(ProductList) {

  let productsHtml = "";
  ProductList.forEach(p => {
    productsHtml += `
        <option value="m"  data-index-number="${p.id}">${p.Name}</option>
        `;
  });
  lista_produktów.innerHTML = productsHtml;

}






produkt_dodaj.onclick = function () {

  let gramatura_input = document.getElementById('gramatura_input');
  let gramatura_error = document.getElementById('gramatura_error');

  var gramatura = gramatura_input.value;
  console.log(gramatura.length)
  console.log(Number.isInteger(parseInt(gramatura)))

  if (gramatura.length > 0 && Number.isInteger(parseInt(gramatura))) {
    gramatura_error.style.visibility = "hidden";
    var zaznaczony_element = lista_produktow.options[lista_produktow.selectedIndex].dataset.indexNumber;
    console.log(zaznaczony_element)
    userApiBaseUrl = `http://localhost:3000/api/products/${zaznaczony_element}`;
    getProductListCall(get_product_data);


  }
  else {
    gramatura_error.style.visibility = "visible";
  }

return false;
}


function get_product_data(ProductList) {
  console.log(ProductList)

  let zmienna = {
    produkt: ProductList,
    ilosc: gramatura_input.value
  }

  skladniki_posilku.push(zmienna);
  console.log("dodano");
  render_produkty(skladniki_posilku);
  renderKCAL(skladniki_posilku);


}


posilek_dodaj.onclick = function () {


  var isValidated = 0;

  console.log(przepis_textarea.value.length)

  if (przepis_textarea.value.length < 50) {
    brak_opisu_error.style.visibility = "visible";
    przepis_textarea.style.border = '2px solid red';
    isValidated = 1;
  }
  else {
    brak_opisu_error.style.visibility = "hidden";
    przepis_textarea.style.border = '2px solid black';
  }





  if (validatepath(zdjecie_label_input.value)) {
    zdjecie_error.style.visibility = "hidden";
    var formdata = new FormData();
    formdata.append('file', document.getElementById('zdjecie_label_input').files[0]);
    formdata.append('nazwa', nazwa_posilku_input.value);

  } else {
    zdjecie_error.style.visibility = "visible"
    isValidated = 1;
  }






  if (nazwa_posilku_input.value.length < 5) {
    nazwa_error.style.visibility = "visible"
    isValidated = 1;
  }
  else {
    nazwa_error.style.visibility = "hidden"
  }

  console.log(isValidated)
  console.log(isValidated)

  if (isValidated == 0) {

    addPhotoCall(formdata);

    console.log(posilekID)
    if (posilekID == null) {
      saveForm(addPosilekCall);
    }
    else {
      saveForm(editPosilekCall);
    }
    //saveForm(cc);

    //posilek_dodaj.href = "../Data/Dodawanie_posilku_komunikat.html";
  }
  else {

  }

}

function render_produkty(skladniki_posilku) {
  tbody_ingredients.innerHTML = null;
  var ingredientsHtml = '';
  var i = 0;
  console.log(skladniki_posilku)
  skladniki_posilku.forEach(s => {
    ingredientsHtml += `
    <tr>
        <td>${s.produkt.Name}</td>            
        <td>${s.ilosc}</td>            
        <td > <button class="button_usuwanie" value="x"> <img class="button_usuwanie_img" src="../img/cancel_icon.jpg" onClick="usunSkladnik(${i})" /></button>   </td>    
        
    </tr>
`;
    i++;
  });
  tbody_ingredients.innerHTML += ingredientsHtml;

}

function usunSkladnik(i) {
  skladniki_posilku.splice(i, 1);
  render_produkty(skladniki_posilku);
  renderKCAL(skladniki_posilku);
}

function renderKCAL(skladniki_posilku) {

  var protein_temp = 0;
  var carbo_temp = 0;
  var fat_temp = 0;

  skladniki_posilku.forEach(s => {
    protein_temp += s.produkt.protein * (s.ilosc / 100);
    carbo_temp += s.produkt.carbo * (s.ilosc / 100);
    fat_temp += s.produkt.fat * (s.ilosc / 100);

  });
  produkty_weglowodany_nowa_wartosc.innerHTML = "Węglowodwany: " + Round(carbo_temp, 2);
  produkty_bialko_nowa_wartosc.innerHTML = "Białko: " + Round(protein_temp, 2);
  produkty_tluszcze_nowa_wartosc.innerHTML = "Tłuszcze: " + Round(fat_temp, 2);
  produkty_kcal_nowa_wartosc.innerHTML = "KCAL: " + Round((carbo_temp * 4 + protein_temp * 4 + fat_temp * 9), 2)
}


function saveForm(apiCall) {

  const PosilekData = {


    Name: nazwa_posilku_input.value,
    produkty_array: skladniki_posilku,
    opis: przepis_textarea.value,
    photo_path: `../img/${nazwa_posilku_input.value}.jpg`,
    id: posilekID
  }
  apiCall(PosilekData);

  return false;
}







///////////EDYCJA
var posilekID;

window.onload = _ => {
  let urlParams = new URLSearchParams(window.location.search);
  posilekID = urlParams.get('id');
  if (posilekID !== null) {
    // getDrinkDetails(drinkId, renderDrinkData);
    posilek_dodaj.innerHTML = 'Zapisz zmiany'
    console.log(posilekID)
    ApiPosilekListUrL = `http://localhost:3000/api/products/posilek_list/${posilekID}`;
    console.log(ApiPosilekListUrL);
    getPosilekListCall(uzupelnij_dane_posilku)
    produkt_usun.style.visibility = "visible";
  }

}




function uzupelnij_dane_posilku(wybrany_posilek) {

  console.log(wybrany_posilek);


  renderKCAL(wybrany_posilek.produkty_array);
  fill_product_data_from_posilek(wybrany_posilek);
  render_produkty(skladniki_posilku);
  zdjecie.src = wybrany_posilek.photo_path;
  nazwa_posilku_input.value = wybrany_posilek.Name;
  przepis_textarea.innerHTML = wybrany_posilek.opis;


}

function render_posilki_data(lista) {
  let productsHtml = "";
  lista.forEach(p => {
    productsHtml += `
      <option value="m"  data-index-number="${p.id}">${p.Name}</option>
      `;
  });
  console.log(productsHtml)
  lista_posilkow.innerHTML = productsHtml;
}


function renderKCAL(skladniki_posilku) {

  var protein_temp = 0;
  var carbo_temp = 0;
  var fat_temp = 0;

  skladniki_posilku.forEach(s => {
    protein_temp += s.produkt.protein * (s.ilosc / 100);
    carbo_temp += s.produkt.carbo * (s.ilosc / 100);
    fat_temp += s.produkt.fat * (s.ilosc / 100);

  });
  produkty_weglowodany_nowa_wartosc.innerHTML = "Węgle: <br><br>" + Round(carbo_temp, 1);
  produkty_bialko_nowa_wartosc.innerHTML = "Białko: <br><br>" + Round(protein_temp, 1);
  produkty_tluszcze_nowa_wartosc.innerHTML = "Tłuszcze: <br><br>" + Round(fat_temp, 1);
  produkty_kcal_nowa_wartosc.innerHTML = "KCAL: <br><br>" + Round((carbo_temp * 4 + protein_temp * 4 + fat_temp * 9), 1)
}



function fill_product_data_from_posilek(ProductList) {

  ProductList.produkty_array.forEach(p => {
    skladniki_posilku.push(p)
  });
}




produkt_usun.onclick = function () {


  deletePosilekCall(posilekID)
  console.log(posilekID)

  window.alert(`Posilek usunięto`);
  location.href = "../Data/Posilki.html";
}
 // window.alert("sometext");
