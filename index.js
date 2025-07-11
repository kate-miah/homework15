// 1 - Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)

for (let counter = 1; counter <= 10; counter++) {
    let res = counter*counter;
    console.log(res);
}

// 2 - Написати функцію, яка запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений

const password = 'password';
while (true) {
    let askPassword = prompt('Введіть пароль');
    if (askPassword === password) {
       console.log('Ви успішно увійшли в систему');
       break;
    } else {
        console.log('Невірний пароль, спробуйте ще')
    }
}


// 3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль

let sumNumber = 100;
let result = 0;
for (let counter = 1; counter <= sumNumber; counter++) {
    result = counter + result;
} 
console.log(result);