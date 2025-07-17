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

// 4. Вивести числа від 10 до 50, які кратні 5

for (let counter = 10; counter <= 50; counter++) {
    if (counter % 5 == 0) {
        console.log(counter);
    }
}

// 5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

let str = '';
for (let k = 1; k <= 7; k++) {
    for (let i = 1; i < k; i++) {
        str += '*';
    }
    str += '\n';
}
console.log(str)

// 6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

let userDiagonalPrompt = Number(prompt('Ведіть розмір квадрату'));

 drawDiagonalSquare(userDiagonalPrompt);

 function drawDiagonalSquare(dimension) {
        let str = '';
    for (let j = 0; j < dimension; j++){
        for (let i = 0; i < dimension; i++) {
            if (j === 0 || j === dimension - 1 || i === 0 || i === dimension - 1 || j === i) {  
                str += '@ ';
            } else {
                str += '  ';
            }            
        }
        str += '\n';
    }
    console.log(str);
 }

 // 7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)

 let userReverseDiagonalPrompt = Number(prompt('Ведіть ще раз розмір квадрату'));

 drawReverseDiagonalSquare(userReverseDiagonalPrompt);

 function drawReverseDiagonalSquare(dimension) {
        let str = '';
    for (let j = 0; j < dimension; j++){
        for (let i = 0; i < dimension; i++) {
            if (j === 0 || j === dimension - 1 || i === 0 || i === dimension - 1 || j + i === dimension - 1) {  
                str += '@ ';
            } else {
                str += '  ';
            }            
        }
        str += '\n';
    }
    console.log(str);
 }
