

var produkt_dodaj = document.getElementById('produkt_dodaj');
var posilek_dodaj = document.getElementById('posilek_dodaj');

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


produkt_dodaj.onclick = function () {

  let gramatura_input = document.getElementById('gramatura_input');
  let gramatura_error = document.getElementById('gramatura_error');

  var gramatura = gramatura_input.value;
  console.log(gramatura.length)
  console.log(Number.isInteger(parseInt(gramatura)))

  if (gramatura.length > 0 && Number.isInteger(parseInt(gramatura))) {
    gramatura_error.style.visibility = "hidden";
  }
  else {
    gramatura_error.style.visibility = "visible";
  }



}

posilek_dodaj.onclick = function () {


  var isValidated = 0;

  let przepis_textarea = document.getElementById('przepis_textarea');
  let brak_opisu_error = document.getElementById('brak_opisu_error');
  let nazwa_error = document.getElementById('nazwa_error');

  let nazwa_posilku_input = document.getElementById('nazwa_posilku_input');
  let zdjecie_label_input = document.getElementById('zdjecie_label_input');
  let zdjecie_error = document.getElementById('zdjecie_error');

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
    zdjecie_error.style.visibility = "hidden"
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

  if ( isValidated == 0) {
    posilek_dodaj.href = "../Data/Dodawanie_posilku_komunikat.html";
    }
    else {
  
    }


}
