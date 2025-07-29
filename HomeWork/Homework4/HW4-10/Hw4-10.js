// #pghbnSB
//
// – створити функцію яка повертає найменьше число з масиву



function arrayNumb(numbers) {
    let min = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            let number = numbers[i];
      if (number < min) {
          min = number;
      }
        }
    }
    return min;
}
console.log(arrayNumb([99, 32, 4322, 6]));