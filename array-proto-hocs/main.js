compareArrays = (arr1, arr2 ) => arr1.length === arr2.length && arr1.every((n, i) => n === arr2[i]);


compareArrays([8, 9], [6]); // false, разные значения
compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]); // false, разные значения
compareArrays([9, 2, 4, 8, 2], [9, 2, 4]); // false, разные значения
compareArrays([1, 2, 3], [2, 3, 1]); // false, разные индексы, хотя и одинаковые значения
compareArrays([8, 1, 2], [8, 1, 2]); // true

const memoize = (fn, limit) => {

  const results = [];

  return function () {

    const resultArr = Array.from(arguments);

    let value = results.find(result => compareArrays(result.args, resultArr));

    if (value) {

      console.log(`Функция вызвана из памяти ${value.result}`);

    } else {

      results.push({

      args: resultArr,

      result: fn(...resultArr),

    });

    if (results.length > limit) {

      results.shift();

    }
    return `Функция вычисляет результат: ${results[results.length - 1].result}`;
    }
  }
}

// const sum = (a, b) => a + b;
// const mSum = memoize(sum, 3);

// console.log(mSum( 1, 3 )); // 4
// console.log(mSum( 3, 4, 5 )); // 7


const sum = (a, b, c) => a + b + c;
const mSum = memoize(sum, 3);


console.log(mSum(3, 4, 5));
console.log(mSum(3, 4, 7));
console.log(mSum(3, 4, 5));



