document.body.style.backgroundImage = 'img_tree.png(change picture?)';

function choose() {
    Console.log(product + 
        "Pris: " + pris);
}

const ul = document.querySelector("ul");
const MAX = 5;
let count = 0;

let product1 ={
    product: "ChipsSourecream & Union chips",
    pris: "35 kr",
}

let product2 ={
    product:"Hot Cheez Cruncherz",
    pris: "31 kr",
}

let product3 ={
    product: "Västkustchips Dill & Gräslök",
    pris: "33 kr",
}

let product4 ={
    product: "Jordnötter",
    pris: "38 kr",
}

let product5 ={
    product: "Chilinötter",
    pris: "45 kr",
}

let product6 ={
    product: "Pringles",
    pris: "40 kr",
}

let products = [product1, product2, product3, product4, product4, product5, product6];
for (let index = 0; index < pruducts.length; index++) {
    const element = array[index];
    pruducts[index] = querySelector()
    
}
console.log(products);

if(count < MAX){
    let li = document.createElemnt("li");
    li.textContent = product + 
    "Pris: " + pris
    ul.appendChild(li);
    count++;
}


let fält = [];
let json = window.localStorage.getItem(min_nyckel);
if (json) {
    fält = JSON.parse(json);
}

fält.push(products);
json = JS
