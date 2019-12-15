//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const posilekExtent = [];

class posilek {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor( Name, produkty_array, opis, photo_path) {
        this.Name = Name;
        this.produkty_array = produkty_array;
        this.opis = opis;
        this.photo_path = photo_path;
    }


static add(posilek) {
    posilek.id = nextId++;
    posilekExtent.push(posilek);
    return posilek;
}


static posilek_details(id_in) {

    let i = 0;
    let response = "odpowiedz";

    while (i < posilekExtent.length) {

        if (posilekExtent[i].id == id_in){
           response = posilekExtent[i];
        }
        
        i++;
        
      }
      return response;
}


static list() {
    return posilekExtent;

}

static posilek_initData() {
    //usuwamy zawartość tablicy
    posilekExtent.splice(0, posilekExtent.length);
    //resetujemy licznik id
    posilek.add(new posilek('zupa', [{"produkt":{"Name":"dynia","carbo":"7","protein":"5","fat":"2","category":"none","photo_path":"../img/dynia.jpg","id":7},"ilosc":"200"},{"produkt":{"Name":"kiełbasa","carbo":"8","protein":"22","fat":"22","category":"none","photo_path":"../img/kielbasa.jpg","id":5},"ilosc":"100"},{"produkt":{"Name":"Fasola","carbo":"2","protein":"12","fat":"12","category":"none","photo_path":"../img/fasola.jpg","id":4},"ilosc":"100"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"100"},{"produkt":{"Name":"oregano","carbo":"1","protein":"1","fat":"2","category":"none","photo_path":"../img/oregano.jpg","id":6},"ilosc":"5"}], 'opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy opis zupy', "../img/zupa.jpg" ));
    posilek.add(new posilek('drugie', [{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"}], 'opis opis drugiego', "../img/drugie_danie.jpg" ));
    posilek.add(new posilek('Schabowy', [{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"}], 'opis opis drugiego', "../img/schabowy.jpg" ));
    posilek.add(new posilek('Ziemniaki w sosie', [{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"},{"produkt":{"Name":"Marchewka","carbo":"4","protein":"2","fat":"1","category":"none","photo_path":"../img/marchewka.jpg","id":3},"ilosc":"13"}], 'opis opis drugiego opis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiegoopis opis drugiego', "../img/ziemniaki w sosie.jpg" ));

}


static posilek_edit(posilek) {
    
    let id = posilek.id;
     
    console.log(posilek.id)
    console.log(posilek.Name)

    for( var i = 0; i < posilekExtent.length; i++){
        
        console.log("PETLA WCHODZI")
        console.log(posilekExtent[i].id)
        console.log(posilekExtent[i].id)
        console.log(posilekExtent[i].id == id);
        if ( posilekExtent[i].id == parseFloat(id)) {
            
            posilekExtent[i].Name = posilek.Name;
            console.log("podmieniono nazwe na :"+posilek.Name)
            posilekExtent[i].produkty_array = posilek.produkty_array;
            posilekExtent[i].opis = posilek.opis;
            posilekExtent[i].photo_path = posilek.photo_path;
            
            return posilekExtent[i];
        }
     }
    


}


static posilek_delete(id) {

    let index =  posilekExtent.findIndex(i => {return i.id == id});
    console.log(`indeks`+index)
    posilekExtent.splice(index,1);
 } 


}

posilek.posilek_initData();

module.exports = posilek;