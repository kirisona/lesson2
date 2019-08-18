// function

// 1. Создать функцию `multiply`, которая будет принимать любое количество чисел и возвращать их произведение: `multiply(1,2,3) = 6 (1*2*3)`

function multiply() {
  if (arguments.length === 0) {
    return 0;
  }

  let z = 1;

  for (var i = 0; i < arguments.length; i++) {
    z *= arguments[i];
  }

  return z;
}

console.log(multiply(1, 2, 3, 4, 5));

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: `reverseString(‘test’) // “tset”`.

function reverseString(str) {
  let strArr = str.split("");
  let arrStr = strArr.reverse();
  str = arrStr.join("");

  return str;
}

console.log(reverseString("hello"));

// Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:

// `getCodeStringFromText(‘hello’) // “104 101 108 108 111” `

// * подсказка: для получения кода используйте специальный метод

function getCodeStringFromText(strU) {
  let symb = "";

  for (let i = 0; i < strU.length; i++) {
    symb += strU.charCodeAt(i) + " ";
  }

  return symb;
}

console.log(getCodeStringFromText("hello"));
console.log(getCodeStringFromText("£"));

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumber(numb) {
  let rand = Math.ceil(Math.random() * 10);

  console.log(rand);

  if (rand === numb) {
    console.log("Вы выиграли");
  } else {
    console.log(`Вы не угадали ваше число ${numb} а выпало число ${rand}`);
  }
}

guessNumber(5);

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: `getArray(10); // [1,2,3,4,5,6,7,8,9,10]`

function getArray(n) {
  let arrayNumb = [];

  for (let i = 1; i <= n; i++) {
    arrayNumb.push(i);
  }
  return arrayNumb;
}

console.log(getArray(10));

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива: doubleArray([1,2,3]) // [1,2,3,1,2,3]

function doubleArray(inputArray) {
  return inputArray.concat(inputArray);
}

console.log(doubleArray([1, 3, 5]));

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений: changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i].shift();
  }
  return Array.from(arguments);
}

// stackoverflow
function changeCollection2() {
  return Array.from(arguments, function(value) {
    value.shift();
    return value;
  });
}

// MDN
function changeCollection3() {
  return Array.from(arguments, value => {
    value.shift();
    return value;
  });
}

console.log(changeCollection([1, 2, 3], [10, 15, 20]));
console.log(changeCollection2([1, 2, 3], [10, 15, 20]));
console.log(changeCollection3([1, 2, 3], [10, 15, 20]));

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.

// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

function funcGetUsers(users, field, value) {
  if (Array.isArray(users)) {
    if (field != undefined) {
      if (value != undefined) {
        let result = [];
        for (let i = 0; i < users.length; i++) {
          if (users[i][field] == value) {
            result.push(users[i]);
          }
        }
        return result;
      }
    }
  }
}

let users = [
  { name: "Denis", age: "29", gender: "male" },
  { name: "Ivan", age: "20", gender: "male" },
  { name: "Olga", age: "15", gender: "female" }
];

console.log(funcGetUsers(users, "gender", "male"));

function funcGetUsers2(users, field, value) {
  return users.filter(function(user) {
    return user[field] == value;
  });
}

console.log(funcGetUsers2(users, "gender", "male"));

// Функции высшего порядка. Задачи.
// 1. Создать две функции и дать им осмысленные названия:
// первая функция принимает массив и колбэк (одна для всех вызовов)
// вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)

function startFunction(inputArray, callback) {
  let outputArray = inputArray.map(callback);
  return "New value: " + outputArray.join("");
}

function firstFunction(value) {
  value = value[0].toUpperCase() + value.substr(1, value.length - 1);
  return value;
}

console.log(startFunction(["my", "name", "is", "Trinity"], firstFunction));

function secondFunction(value) {
  return value * 10 + ", ";
}

console.log(startFunction([10, 20, 30], secondFunction));

function thirdFunction(value) {
  return `${value.name} is ${value.age}, `;
}

console.log(
  startFunction(
    [{ age: 45, name: "Jhon" }, { age: 20, name: "Aaron" }],
    thirdFunction
  )
);

function fourthFunction(value) {
  return reverseString(value) + ", ";
}

console.log(startFunction(["abc", "123"], fourthFunction));

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция) функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

function myEvery(inputArray, callback) {
  if (Array.isArray(inputArray)) {
    if (typeof callback === "function") {
      let result = true;
      for (let i = 0; i < inputArray.length; i++) {
        result = result && callback(inputArray[i], i, inputArray);
        if (!result) {
          return result;
        }
      }
      return result;
    }
  }
}

function myCallback(element, index, arr) {
  if (element > 5) {
    return true;
  } else {
    return false;
  }
}

function myCallback2(element, index, arr) {
  return element > 5;
}

console.log(myEvery([6, 7, 20, 8], myCallback));

console.log(myEvery([6, 7, 20, 8], myCallback2));

// Массивы. Перебирающие методы. Задачи.
// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:

let numbers = [1, 2, 3, 5, 8, 9, 10];

let result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push({
    digit: numbers[i],
    odd: numbers[i] % 2 == 0
  });
}
console.log(result);

// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

function returnZirro(element, index, array) {
  return element > 0;
}

console.log([12, 4, 50, 1, 0, 18, 40].every(returnZirro));

// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

function returnWords(element, index, array) {
  return array[index].length > 3;
}

console.log(["yes", "hello", "no", "easycode", "what"].some(returnWords));

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы.
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки

let word = [
  { char: "a", index: 12 },
  { char: "w", index: 8 },
  { char: "Y", index: 10 },
  { char: "p", index: 3 },
  { char: "p", index: 2 },
  { char: "N", index: 6 },
  { char: " ", index: 5 },
  { char: "y", index: 4 },
  { char: "r", index: 13 },
  { char: "H", index: 0 },
  { char: "e", index: 11 },
  { char: "a", index: 1 },
  { char: " ", index: 9 },
  { char: "!", index: 14 },
  { char: "e", index: 7 }
];

word.sort(function(prev, next) {
  if (prev.index < next.index) return -1;
  if (prev.index > next.index) return 1;
});
console.log(word);

let newWord = word.reduce(function(prev, next) {
  return (prev += next.char);
  // не разобралась, как вернуть к строке полностью, иначе при задании prev.char возвращает undefined
});

console.log(newWord);

// Массивы. Метод Sort. Задачи.
// 1. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):

let arrayArray = [[14, 45], [1], ["a", "c", "d"]];

arrayArray.sort(function(prev, next) {
  if (prev.length < next.length) return -1;
  if (prev.length > next.length) return 1;
});
console.log(arrayArray);

// 2. Есть массив объектов. Отсортировать их по возрастающему количеству ядер (cores).

let arrCores = [
  { cpu: "intel", info: { cores: 2, сache: 3 } },
  { cpu: "intel", info: { cores: 4, сache: 4 } },
  { cpu: "amd", info: { cores: 1, сache: 1 } },
  { cpu: "intel", info: { cores: 3, сache: 2 } },
  { cpu: "amd", info: { cores: 4, сache: 2 } }
];

arrCores.sort(function(prev, next) {
  if (prev.info.cores < next.info.cores) return -1;
  if (prev.info.cores > next.info.cores) return 1;
});
console.log(arrCores);

// 3 Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:

let products = [
  { title: "prod1", price: 5.2 },
  { title: "prod2", price: 0.18 },
  { title: "prod3", price: 15 },
  { title: "prod4", price: 25 },
  { title: "prod5", price: 18.9 },
  { title: "prod6", price: 8 },
  { title: "prod7", price: 19 },
  { title: "prod8", price: 63 }
];

products.sort(function(prev, next) {
  if (prev.price < next.price) return -1;
  if (prev.price > next.price) return 1;
});

function isBigEnough(value) {
  return value.price > 5;
}

console.log(products.filter(isBigEnough));
