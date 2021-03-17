// Вычислить значение многочлена тремя методами:

// 1 явное вычисление;
// 2 метод накопления степени;
// 3 схема Горнера.
// Для формирования многочлена по заданной степени многочлена n коэффициенты многочлена сгенерировать случайным образом. Для каждого метода засечь время исполнения, используя встроенные функции времени.

// Входные данные: степень многочлена n, значение аргумента x.

// Выходные данные: три строки (значение многочлена и время исполнения) по различным методам вычисления.

// В качестве ответа приложить файл с исходным кодом программы.

//https://planetcalc.ru/7716/

//console.time('sposob_1')
// let Gorner = (n, x) => {
//   let getRandInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

//   let a = [];
//   for (let i = 0; i < n; i++){
//     a[i] = getRandInt(-10, 10);
//   }

//   let sum = 0;
//   for (let i=0; i<n; i++){
//     sum = sum + (x ** (n - i - 1)) * a[i];
//   }

//   console.log(a)
//   return sum;
// }
// //console.timeEnd('sposob_1')
//   console.log(Gorner(5, 3))

//----------------------------------------------------------
console.time("sposob_3");
let Sposob_3 = (n, x) => {
  let getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = getRandInt(-10, 10);
  }

  let sum = a[0];
  for (let i = 1; i < n; i++) {
    sum = sum * x + a[i];
  }

  console.log(a);
  return sum;
};
console.timeEnd("sposob_3");
console.log(Sposob_3(4, 3));

//----------------------------------------------------------

console.time("sposob_2");
let Sposob_2 = (n, x) => {
  let getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = getRandInt(-10, 10);
  }

  let sum = 0;
  let stepen = 1;
  for (let i = n - 1; i >= 0; i--) {
    sum = sum + a[i] * stepen;
    stepen = x * stepen;
  }

  console.log(a);
  return sum;
};
console.timeEnd("sposob_2");
console.log(Sposob_2(4, 3));

//----------------------------------------------------------

console.time("sposob_1");
let Sposob_1 = (n, x) => {
  let getRandInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  let a = [];
  for (let i = 0; i < n; i++) {
    a[i] = getRandInt(-10, 10);
  }

  let sum = 0;
  let j = n;
  for (let i = 0; i < n; i++) {
    let k = a[i] * Math.pow(x, j - 1);
    sum = sum + k;
    j--;
  }

  console.log(a);
  return sum;
};
console.timeEnd("sposob_1");
console.log(Sposob_1(4, 3));
