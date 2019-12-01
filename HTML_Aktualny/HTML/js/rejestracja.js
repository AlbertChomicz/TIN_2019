

var dodaj = document.getElementById('dodaj_usera');

function validateEmail(email) 
{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

dodaj.onclick = function(){

    let zarejestruj_sie_link = document.getElementById('zarejestruj_sie_link');

    let nazwa_label_error = document.getElementById('nazwa_label_error');
    let nazwisko_label_error = document.getElementById('nazwisko_label_error');
    let email_label_error = document.getElementById('email_label_error');
    let haslo_label_error = document.getElementById('haslo_label_error');
    let haslo_potwierdzenie_error = document.getElementById('haslo_potwierdzenie_error');
    let rok_urodzenia_label_error = document.getElementById('rok_urodzenia_label_error');
    let zdjecie_label_error = document.getElementById('zdjecie_label_error');
    let dodawanie_label_error = document.getElementById('dodawanie_label_error');
    


    let imie_label_input =  document.getElementById('imie_label_input');
    let nazwisko_label_input =  document.getElementById('nazwisko_label_input');
    let email_label_input =  document.getElementById('email_label_input');
    let haslo_label_input =  document.getElementById('haslo_label_input');
    let haslo_potwierdzenie_input =  document.getElementById('haslo_potwierdzenie_input');
    let rok_urodzenia_label_input =  document.getElementById('rok_urodzenia_label_input');
    let zdjecie_label_input =  document.getElementById('zdjecie_label_input');
 

    var imie_lenght = imie_label_input.value.length;
    var nazwisko_lenght = nazwisko_label_input.value.length;
    var email_input = email_label_input.value;
    var haslo_lenght = haslo_label_input.value.length;
    var haslo_potwierdzenie_lenght = haslo_potwierdzenie_input.value.length;


    let isValidated = 0;
    console.log(email_input)
    console.log(validateEmail(email_input))

    if (imie_lenght < 4) {
        //  block of code to be executed if the condition is true
        nazwa_label_error.style.visibility='visible';
        isValidated = 1;
      }
      else {
        nazwa_label_error.style.visibility='hidden';
      }

      if (nazwisko_lenght < 4) {
        //  block of code to be executed if the condition is true
        nazwisko_label_error.style.visibility='visible';
        isValidated = 1;
      }
      else {
        nazwisko_label_error.style.visibility='hidden';
      }
      
      if (validateEmail(email_input)) {
        //  block of code to be executed if the condition is true
        email_label_error.style.visibility='hidden';
      }
      else {
        email_label_error.style.visibility='visible';
        isValidated = 1;
      }
      
  
      if (haslo_lenght < 4) {
        //  block of code to be executed if the condition is true
        haslo_label_error.style.visibility='visible';
        isValidated = 1;
      }
      else {
        haslo_label_error.style.visibility='hidden';
      }
    
      console.log(haslo_potwierdzenie_input.value)
      console.log(haslo_label_input.value)
      console.log(haslo_potwierdzenie_input.value == haslo_label_input.value)

      if (haslo_potwierdzenie_input.value  == haslo_label_input.value) {
        //  block of code to be executed if the condition is true
        haslo_potwierdzenie_error.style.visibility='hidden';
      }
      else {
        haslo_potwierdzenie_error.style.visibility='visible';
        isValidated = 1;
      }
    
      console.log(isValidated)
	  if ( isValidated == 0) {
        zarejestruj_sie_link.href = "../Data/Rejestracja_komunikat.html";
      }
      else {
  
      }
  

};
