//Purpose of this script is to update the quantity inside of my webflow quantity component by updating the DOM

const minus = document.querySelector(".product-quantity-elem.minus");
const plus = document.querySelector(".product-quantity-elem.plus");

decrementQuantity = () => {
    let currentQuantity = document.querySelector("#product-quantity")

    if( parseInt(currentQuantity.innerText) !== 1 ){
        let calculation = parseInt(currentQuantity.innerText) - 1;
        currentQuantity.innerText = calculation.toString();
    } else{
        console.log("sorry you tried to decrement when the quantity was 1");
    }
}

incrementQuantity = () => {
    let currentQuantity = document.querySelector("#product-quantity")
    let calculation = parseInt(currentQuantity.innerText) + 1;
    currentQuantity.innerText = calculation.toString();
}

//set my event listeners
minus.addEventListener("click", ()=> {
    decrementQuantity();
})

plus.addEventListener("click", ()=> {
    incrementQuantity();
})