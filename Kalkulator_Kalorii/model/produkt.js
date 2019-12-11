//licznik id
let nextId = 1;
//ekstensja klasy (wszystkie obiekty)
const productExtent = [];

class product {
    //parametr id jest na końcu, bo jest opcjonalny
    constructor( Name, carbo, protein, fat, category, photo_path, id) {
        this.Name = Name;
        this.carbo = carbo;
        this.protein = protein;
        this.fat = fat;
        this.category = category;
        this.photo_path = photo_path;
        this.id = id;
    }

    //dodawanie obiektu do bazy
    static add(product) {
        product.id = nextId++;
        productExtent.push(product);
        return product;
    }
    //pobranie listy obiektów
    //metoda nie powinna pobierać nadmiarowych danych
    //(np. przez złączenia JOIN w relacyjnej bazie danych)
    //które nie będą wyświetlane na liście
    static list() {
        return productExtent;
    }
    //edycja obiektu
    static product_edit(product) {
        //FIXME
    }
    //usuwanie obiektu po id
    static product_delete(id) {
        //FIXME
    } 
    //pobieranie obiektu do widoku szczegółów
    //może być potrzebne pobranie dodatkowych danych
    //np. przez złączenia JOIN w relacyjnej bazie danych
    static product_details(id_in) {
        
       
           
            let i = 0;
            let response = "duppppa";

            while (i < productExtent.length) {
             /*   console.log(i)
                console.log(productExtent[i].id)
                console.log(id_in)
                console.log(productExtent[i].id === id_in)
                */
                if (productExtent[i].id == id_in){
                   response = productExtent[i];
                }
                
                i++;
                
              }
              return response;
    }
    
    //metoda resetuje stan bazy i dodaje rekordy testowe
    //przydatna do testów
    static product_initData() {
        //usuwamy zawartość tablicy
        productExtent.splice(0, productExtent.length);
        //resetujemy licznik id
        product.add(new product('Ananas', '12', '3', '4', 'none', '../img/ananas.jpg', null ));
        product.add(new product('Pomidor', '6', '5', '7', 'none', '../img/pomidor.jpg', null ));
        product.add(new product('Marchewka', '4', '2', '1', 'none', '../img/marchewka.jpg', null ));
    }
}

product.product_initData();

module.exports = product;