// – створити функцію, яка створює ul з трьома елементами li та
// виводить його через document.write. Текст li задати через аргумент всім однаковий


function textList(text){
   document.write(`
     <ul>
       <li>${text}</li>
       <li>${text}</li>
       <li>${text}</li>
    </ul>`)
}

textList('trek');