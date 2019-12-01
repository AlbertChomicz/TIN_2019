

var wybierz = document.getElementById('wybierz');
let produkty_gram_przelicznik_submit = document.getElementById('produkty_gram_przelicznik_submit');


wybierz.onclick = function(){

    let lista_posilkow = document.getElementById('lista_posilkow');
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
    

}
  



