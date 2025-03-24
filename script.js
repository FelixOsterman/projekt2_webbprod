function choose(number) {
    document.body.classList.toggle(choose);
    let vara = document.createElement("li");
    vara.textContent = Varor[number];
    pris = Priser[number];
    console.log("Vara: " + vara + "   " + "Pris: " + pris);
}

let Varor = document.querySelectorAll("h2");
let Priser = document.querySelectorAll("p");
