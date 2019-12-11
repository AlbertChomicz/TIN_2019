var userApiBaseUrl = 'http://localhost:3000/api/products';


var produkt_dodaj = document.getElementById('produkt_dodaj');



function required(inputtx) 
{
  if (inputtx.value.length == 0)
   { 
      return true; 
   }  	
   return false; 
 } 

 function validatepath(path) 
 {
     var re = /^.+\.(([jJ][pP][gG]))$/;
     return re.test(path);
 }


produkt_dodaj.onclick = function(){

  var isValidated = 0;





  let nazwa_label_error = document.getElementById('nazwa_label_error');
  let wegle_label_error = document.getElementById('wegle_label_error');
  let bialko_label_error = document.getElementById('bialko_label_error');
  let tluszcze_label_error = document.getElementById('tluszcze_label_error');
  let kategoria_label_error = document.getElementById('kategoria_label_error');
  let zdjecie_label_error = document.getElementById('zdjecie_label_error');
  let dodawanie_label_error = document.getElementById('dodawanie_label_error');
  
  let nazwa_label_input =  document.getElementById('nazwa_label_input');
  let wegle_label_input =  document.getElementById('wegle_label_input');
  let bialko_label_input =  document.getElementById('bialko_label_input');
  let tluszcze_label_input =  document.getElementById('tluszcze_label_input');
  let kategoria_label_input =  document.getElementById('kategoria_label_input');
  let zdjecie_label_input =  document.getElementById('zdjecie_label_input');


  var nazwa_lenght = nazwa_label_input.value.length;
  var wegle_input =   parseInt(wegle_label_input.value);
  var bialko_input = parseInt(bialko_label_input.value);
  var tluszcz_input = parseInt(tluszcze_label_input.value);
  
  /*
  if (Number.isInteger(wegle_input) && wegle_input < 101) {
    //  block of code to be executed if the condition is true
    wegle_label_error.style.visibility='hidden';
    wegle_label_input.style.border = '0px solid red';
  }
  else{
    wegle_label_input.style.border = '1px solid red';
    bialko_label_error.innerHTML  = "B";
    wegle_label_error.style.visibility='visible';
  }

  if (Number.isInteger(bialko_input) && bialko_input < 101) {
    //  block of code to be executed if the condition is true
    bialko_label_error.style.visibility='hidden';
    bialko_label_input.style.border = '0px solid red';
  }
  else{
    bialko_label_input.style.border = '1px solid red';
    bialko_label_error.style.visibility='visible';
  }

  if (Number.isInteger(tluszcz_input) && tluszcz_input < 101) {
    //  block of code to be executed if the condition is true
    tluszcze_label_error.style.visibility='hidden';
    tluszcze_label_input.style.border = '0px solid red';
  }
  else{
    tluszcze_label_input.style.border = '1px solid red';
    tluszcze_label_error.style.visibility='visible';
  }
*/
var bialko_val = parseInt(bialko_label_input.value);
var wegle_val = parseInt(wegle_label_input.value);
var tluszcze_val = parseInt(tluszcze_label_input.value);

console.log(wegle_val)
console.log(Number.isInteger(wegle_val))
console.log(bialko_val)
console.log(Number.isInteger(bialko_val))
console.log(tluszcze_val)
console.log(Number.isInteger(tluszcze_val))




  if (required(wegle_label_input) || required(bialko_label_input) || required(tluszcze_label_input)) {

    bialko_label_input.style.border = '1px solid red';
    wegle_label_input.style.border = '1px solid red';
    tluszcze_label_input.style.border = '1px solid red';
    bialko_label_error.innerHTML  = "żadne z tych pól nie może być puste";
    tluszcze_label_error.style.visibility='hidden';
    wegle_label_error.style.visibility='hidden';
    bialko_label_error.style.visibility='visible';
    isValidated = 1;

}
else {
    tluszcze_label_input.style.border = '0px solid red';
    bialko_label_input.style.border = '0px solid red';
    wegle_label_input.style.border = '0px solid red';
    bialko_label_error.innerHTML  = "żadne z tych pól nie może być puste";
    tluszcze_label_error.style.visibility='hidden';
    wegle_label_error.style.visibility='hidden';
    bialko_label_error.style.visibility='hidden';
}


if ((wegle_input+bialko_input+tluszcz_input) >99 ) {
  //  block of code to be executed if the condition is true

  tluszcze_label_input.style.border = '1px solid red';
  bialko_label_input.style.border = '1px solid red';
  wegle_label_input.style.border = '1px solid red';
  bialko_label_error.innerHTML  = "suma makro-składników nie może przekroczyć 100g";
  tluszcze_label_error.style.visibility='hidden';
  wegle_label_error.style.visibility='hidden';
  bialko_label_error.style.visibility='visible';
  isValidated = 1;
}
else{
  
}

console.log(nazwa_lenght)
if(nazwa_lenght < 3){

nazwa_label_input.style.border = '1px solid red';
nazwa_label_error.style.visibility='visible';
isValidated = 1;
}
else{
  
nazwa_label_input.style.border = '0px solid red';
nazwa_label_error.style.visibility='hidden';
}


if (Number.isInteger(wegle_val) && Number.isInteger(bialko_val) &&
Number.isInteger(parseInt(tluszcze_val))) {

}
else {
bialko_label_input.style.border = '1px solid red';
wegle_label_input.style.border = '1px solid red';
tluszcze_label_input.style.border = '1px solid red';
bialko_label_error.innerHTML  = "Pola przyjmują tylko liczby";
tluszcze_label_error.style.visibility='hidden';
wegle_label_error.style.visibility='hidden';
bialko_label_error.style.visibility='visible';
isValidated = 1;
}


var zaznaczony_element = kategoria_label_input.selectedIndex;
if (zaznaczony_element == 0){
  kategoria_label_error.style.visibility = 'visible';
  isValidated = 1;
}
else{
  kategoria_label_error.style.visibility = 'hidden';
}


console.log(zdjecie_label_input.value)
var sciezka = zdjecie_label_input.value;
console.log(validatepath(sciezka))

if(validatepath(sciezka)){
  zdjecie_label_error.style.visibility = "hidden";
  console.log("jest plik")
  var zdjecie_label_input_file = document.getElementById('zdjecie_label_input').files[0];
  console.log(zdjecie_label_input_file);
  //var zdjecie_label_input_file = $("#zdjecie_label_input")[0].files[0];
  
  var formdata = new FormData();
    //formdata.append('path',  document.getElementById('zdjecie_label_input').path)
    formdata.append('file', document.getElementById('zdjecie_label_input').files[0], 'filename');
    //formData.append('file', myFileInput.files[0], 'chris.jpg');
    console.log(formdata)
    
    addPhotoCall(formdata);
  /*if(zdjecie_label_input_file){
    fs.writeFileSync(`../img/${nazwa_label_input.value}`,zdjecie_label_input_file, (err) => {
      throw err;

    })
    console.log("jest plik")
  }*/

}else{
  zdjecie_label_error.style.visibility = "visible";
  isValidated = 1;
}


console.log(isValidated)
if ( isValidated == 0) {
  
  

  saveForm(addProductCall);
 // produkt_dodaj.href = "../Data/Dodaj_produkt_komunikat.html";
 console.log("dodane")
  }
  else {

  }


}


function saveForm(apiCall) {
  // console.log(`saveForm(${action})`);

  //pobranie danych z formularza 
  //i utworznie obiektu user-a
  const ProductData = {

    Name: nazwa_label_input.value,
    carbo: wegle_label_input.value,
    protein: bialko_label_input.value,
    fat: tluszcze_label_input.value,
    category: kategoria_label_input.value,
    photo_path: `../img/${nazwa_label_input.value}`
  }

  // if('add' == action) {
      apiCall(ProductData);
  // } else if('edit' == action) {
  //     editUserCall(userData, getAndRenderUsers);
  // }

  //BARDZO WAŻNE - akcja guzika na formularzu powinna zwrócić false, inaczej
  //formularz będzie wysłany w standardowy sposób, a strona będzie przeładowana
  return false;
}

