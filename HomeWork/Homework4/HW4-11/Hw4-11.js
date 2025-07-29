// #EKRNVPM
//
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//     Приклад sum([1,2,10]) //->13


function sum(arr) {
    let sumAll = 0;
    for (const item of arr) {
        sumAll= sumAll+item;
    }
    return sumAll;
}
console.log(sum([43, 4, 76, 8]
));