// #bovDJDTIjt
//
// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
//     та виводить їх в документ. Для кожного об’єкту окремий блок.
//





function ListofUsers(users) {
    for (const user of users) {
        document.write(`<div>${user.id}, ${user.name}, ${user.age}  </div>`);
        
    }
    }
ListofUsers ([
    {id:1, name: "John", age:18},
    {id:2, name: "John", age:40},
    {id:3, name: "John", age:38},
    {id:4, name: "John", age:28}

])