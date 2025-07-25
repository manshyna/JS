// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві),
//     та будує для них список (ul li) та виводить його через document.write

function foobar(array) {
    document.write('<ul>');
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);

    }
    document.write('</ul>');
}

foobar([1,2,3,4,5,6,7,8,9,10, 'fdgshjk'])