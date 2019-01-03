'use strict'

const productPrices     = document.getElementsByClassName('productPrice') // this returns an array with elements containing the price
const productQuantities = document.getElementsByClassName('productQuantity') // this returns an array with elements containing the quantity
const productTotalCosts = document.getElementsByClassName('productTotalCost') // this returns an array with elements containing the total cost of the products
const totalCost         = document.getElementById('totalCost') // this returns a single element for the totalCost
const grocerylist       = document.getElementById('grocerylist') // this returns a single element which is the table

grocerylist.onchange = function() {

    let totaalBedrag = 0

    let i = 0

    for (i = 0; i < 7; i++) {

        let prijsPerProduct            = parseFloat(productPrices[i].innerHTML).toFixed(4)
        let aantalProducten            = productQuantities[i].valueAsNumber
        let subtotaal                  = +(prijsPerProduct * aantalProducten).toFixed(4)
        productTotalCosts[i].innerHTML = '€' + subtotaal
        totaalBedrag                   = totaalBedrag + subtotaal
    }

    totalCost.innerHTML = '€' + +totaalBedrag.toFixed(4)

}
