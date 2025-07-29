// #mkGDenYnNjn.html
//
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400



// function exchange(sumUAH,currencyValues,exchangeCurrency){
//  let box = {
//      Amount: sumUAH,
//      value : currencyValues,
//      carency : exchangeCurrency,
//      finalAmount: sumUAH/currencyValues,
//  }
//  return box;
// }
// let box1= exchange(10000, 41, "USD")
// let box2= exchange(10000, 45, "EUR")
// let box3= exchange(10000, 34, "CAD")
//
// console.log(box1)
// console.log(box2)
// console.log(box3)


function exchange(sumUAH,currencyValues,exchangeCurrency){
    let box = {
        Amount: sumUAH,
        value : currencyValues,
        carency : exchangeCurrency,
        finalAmount: sumUAH/currencyValues,
    }
    return box;
}
console.log(exchange(10000, 41, "USD"))
console.log(exchange(10000, 45, "EUR"))
console.log(exchange(10000, 34, "CAD"))
