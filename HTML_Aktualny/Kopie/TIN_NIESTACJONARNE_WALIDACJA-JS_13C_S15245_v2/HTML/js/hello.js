

        function codeAddress() {
            alert('ok');
        }
        window.onload = codeAddress;

console.log(
    "Hello world"
)


var celcjusz = document.getElementById("celcjusz")
var Farenhajt = document.getElementById("Farenhajt")
var Przelicz_Na_Celcjusze = document.getElementById("Przelicz_Na_Celcjusze")
var Przelicz_Na_Farenhajty = document.getElementById("Przelicz_Na_Farenhajty")


Przelicz_Na_Celcjusze.onclick = function(){
    celcjusz.value = Farenhajt.value * 100;

};


Przelicz_Na_Farenhajty.onclick = function(){
    Farenhajt.value = celcjusz.value/100;
};