//MOSTRARE UNA LISTA//

let listaprodotto = [
    {

        prodotto: "pane",

    },
    {

        prodotto: "latte",

    },

    {

        prodotto: "salame",

    },
    {

        prodotto: "zucchero",

    },
]



console.log(listaprodotto);

//AGGIUNGERE UN PRODOTTO//

listaprodotto.push("prodotto:" + "banane");

console.log(listaprodotto);

//ORDINARE IN ORDINE ALFABETTICO//

listaprodotto.sort

console.log(listaprodotto);


//Lista ORDINATA//

var lista_della_spesa = Array("pane", "latte", "zucchero", "sale", "formaggi",);

document.write(lista_della_spesa.sort())


//Modifica elemento//

var lista_della_spesa = Array[
    { prodotto: "pane", marca: "pinco" },
    { prodotto: "latte", marca: "granarolo" },
    { prodotto: "zucchero", marca: "selex" },
    { prodotto: "sale", marca: "coop" },
    { prodotto: "formaggi", marca: "zeus" }]


let marcadelprodotto = lista_della_spesa.map(function (element) {
    return `${element.prodotto} ${element.marca}`;
})

console.log(lista_della_spesa)