
var lista_posilkow = document.getElementById('lista_posilkow');
var wybierz = document.getElementById('wybierz');
let produkty_gram_przelicznik_submit = document.getElementById('produkty_gram_przelicznik_submit');
var zdjecie = document.getElementById('000002');
var nazwa_wybranego_posilku = document.getElementById('nazwa_wybranego_posilku');
var tbody_ingredients = document.getElementById('tbody_ingredients');

var produkty_weglowodany_nowa_wartosc =document.getElementById('produkty_weglowodany_nowa_wartosc');
var produkty_bialko_nowa_wartosc = document.getElementById('produkty_bialko_nowa_wartosc');
var produkty_tluszcze_nowa_wartosc = document.getElementById('produkty_tluszcze_nowa_wartosc');
var produkty_kcal_nowa_wartosc = document.getElementById('produkty_kcal_nowa_wartosc');
var textarea_opis = document.getElementById('textarea_opis');
var edytuj = document.getElementById('edytuj');




getPosilekListCall(render_posilki_data);



function uzupelnij_dane_pierwszy(){
  var zaznaczony_element = 1;
  ApiPosilekListUrL = `http://localhost:3000/api/products/posilek_list/${zaznaczony_element}`;
  getPosilekListCall(uzupelnij_dane_posilku)

}
uzupelnij_dane_pierwszy();

function Round(n, k)
{
    var factor = Math.pow(10, k);
    return Math.round(n*factor)/factor;
}


wybierz.onclick = function(){

    
    let wybierz_label_error = document.getElementById('wybierz_label_error');

    var zaznaczony_element = lista_posilkow.selectedIndex;

    if (zaznaczony_element == -1) {
      //  block of code to be executed if the condition is true
      wybierz_label_error.style.visibility='visible';
      lista_posilkow.style.border = '1px solid red';
    }
    else{
      wybierz_label_error.style.visibility='hidden';
      lista_posilkow.style.border = '0px solid red';
    }
  

    var zaznaczony_element = lista_posilkow.options[lista_posilkow.selectedIndex].dataset.indexNumber;
    ApiPosilekListUrL = `http://localhost:3000/api/products/posilek_list/${zaznaczony_element}`;
    getPosilekListCall(uzupelnij_dane_posilku)

    if(zaznaczony_element!= null){
    edytuj.href = `../Data/Dodawanie_posilku.html?id=${zaznaczony_element}`
    }
    else{
      edytuj.href = `#`
    }
    return false;
  }

  function uzupelnij_dane_posilku(wybrany_posilek){

    console.log(wybrany_posilek);
    
    
    render_produkty(wybrany_posilek.produkty_array);
    renderKCAL(wybrany_posilek.produkty_array)
    zdjecie.src = wybrany_posilek.photo_path;
    nazwa_wybranego_posilku.innerHTML = wybrany_posilek.Name;
    textarea_opis.innerHTML = wybrany_posilek.opis;


  }

    function render_posilki_data(lista){
      let productsHtml = "";
      lista.forEach(p => {
          productsHtml += `
          <option value="m"  data-index-number="${p.id}">${p.Name}</option>
          `;
      });
      console.log(productsHtml)
      lista_posilkow.innerHTML = productsHtml;
    }


  
    function render_produkty(skladniki_posilku){
      tbody_ingredients.innerHTML = null;
      ingredientsHtml = '';
      console.log(skladniki_posilku)
      skladniki_posilku.forEach(s => {
        ingredientsHtml += `
        <tr>
            <td>${s.produkt.Name}</td>            
            <td>${s.ilosc}</td>            
        </tr>
    `;
    });
    tbody_ingredients.innerHTML += ingredientsHtml;
    
    }


    function renderKCAL(skladniki_posilku){

      var protein_temp = 0;
      var carbo_temp = 0;
      var fat_temp = 0;
    
      skladniki_posilku.forEach(s => {
        protein_temp += s.produkt.protein*(s.ilosc/100);
        carbo_temp += s.produkt.carbo*(s.ilosc/100);
        fat_temp += s.produkt.fat*(s.ilosc/100);
    
      });
      produkty_weglowodany_nowa_wartosc.innerHTML = "Węgle: <br><br>"+Round(carbo_temp,1);
      produkty_bialko_nowa_wartosc.innerHTML = "Białko: <br><br>"+Round(protein_temp,1);
      produkty_tluszcze_nowa_wartosc.innerHTML = "Tłuszcze: <br><br>"+Round(fat_temp,1);
      produkty_kcal_nowa_wartosc.innerHTML = "KCAL: <br><br>"+Round((carbo_temp*4+protein_temp*4+fat_temp*9),1)
    }

