

var wybierz = document.getElementById('wybierz');
let produkty_gram_przelicznik_submit = document.getElementById('produkty_gram_przelicznik_submit');


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
    }
    

};

produkty_gram_przelicznik_submit.onclick = function(){


 
  let produkty_gram_przelicznik_error = document.getElementById('produkty_gram_przelicznik_error');
  let produkty_gram_input = document.getElementById('produkty_gram_input');
  
  
  var input=   parseInt(produkty_gram_input.value);
  console.log(Number.isInteger(input))
  console.log(produkty_gram_input.value);

  if (Number.isInteger(input)) {
    //  block of code to be executed if the condition is true
    produkty_gram_przelicznik_error.style.visibility='hidden';
    produkty_gram_input.style.border = '0px solid red';
  }
  else{
    produkty_gram_input.style.border = '1px solid red';
    produkty_gram_przelicznik_error.style.visibility='visible';
  }
  


}
