const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");
const num = document.querySelector(".value");
const price = document.querySelector(".price");

let init = 1;
num.innerHTML = init

let pricenum = 1600;

price.innerHTML = "$" + pricenum 

increase.addEventListener("click", function () {
    init++;

    pricenum = 1600 * init

    num.innerHTML = init

   if(init >10){
    init = 10
    pricenum = 16000
    num.innerHTML = init
   }

    price.innerHTML = "$" + pricenum 
})

decrease.addEventListener("click", function () {
    init--;
    pricenum = pricenum - 1600
    if(init < 1){
        init = 1
        pricenum = 1600

    }

    num.innerHTML = init

    price.innerHTML = "$" + pricenum

})

const cart = document.querySelector(".cart");

cart.addEventListener("click", () =>{
    console.log(pricenum);
})

