 //
  function ourarray(numbers) {
    for (const element of numbers) {
        console.log(element);
    }
  }
  ourarray([10, 20, 30, 40, 50])
//- створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
  function rundomarray(length, min, max) {
    let array = [];
     for (let i=0; i<length; i++) {
         array.push(Math.round(Math.random()*(max-min)+min))
      }
    ourarray(array);
    }
   rundomarray(10, 8, 77);
//- створити функцію яка приймає три числа та виводить та повертає найменьше.
  function smallest(x, y, z) {
    let min
      x<y ? min=x : min=y;
      min>z ? min=z : null;
      console.log(min);
      return min;
  }
  console.log(smallest(10,20,30));
//- створити функцію яка приймає три числа та виводить та повертає найбільше.
  function biggest(x, y, z) {
      let max
      x>y ? max=x : max=y;
      max<z ? max=z : null;
      console.log(max);
      return max;
  }
  console.log(biggest(10, 20,30))
//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
   function f() {
        let min= arguments [0];
        let max= arguments [0];
         for (const element of arguments) {
             if (element>max)max= element;
             if (element<min)min= element;
         }
        console.log(max);
         return min
   }
   let minimal = f(10,20,30,40,50,60,70,80,90,100);
// - створити функцію яка виводить масив
    function array(a, b, c, d, e, f) {
        console.log(arguments)
    }
    array(10, 20, 30, 40, 50, 60);

  //- створити функцію яка повертає найбільше число з масиву

 function bignumber(numbers) {
    let max= numbers[0];
     for(const element of numbers) {
         if (element>max) {
             console.log(element);
             max=element;
         }
     }
    return max;
 }
  let arr= ([15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
 const big = bignumber(arr);
 console.log(big);

//- створити функцію яка повертає найменьше число з масиву
  function smallnumber(numbers) {
      let min= numbers[0];
       for (const element of numbers) {
           if (element<min) {
               console.log(element);
               min=element;
           }
       }
    return min
  }
  let p= ([15, 20, 25, 30, 35, 40, 45, 50, 55, 60]);
 const small = smallnumber(p);
 console.log(small);
//- створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
 function calculator() {

    let sum = 0;
    for (const argument of arguments) {
        sum += argument;
    }
    console.log(sum);
    return sum
 }
  calculator(10, 10, 10, 10, 10);


//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    function sa() {
     let len = arguments.length;
     let sum = 0;
     for (let i=0; i<len; i++) {
         sum += +arguments[i];
     }
     console.log(sum/len);
     return sum/len;

 }
      sa(10, 10, 10, 10, 10);


//- Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
 let usersWithId = [
     {id: 1, name: 'vasya', age: 31, status: false},
     {id: 2, name: 'petya', age: 30, status: true},
     {id: 3, name: 'kolya', age: 29, status: true},
     {id: 4, name: 'olya', age: 28, status: false},];

  function objects(usersWithId) {
     let count = 0;
      for (const element of usersWithId) {
         if (typeof element === 'object') {
             count++
         }
      }
    return count
  }
  const n = objects(usersWithId);
  console.log(n);

//- Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
  function obkeys(usersWithId) {
       let count = 0;
       for (const element of usersWithId) {
         for(const keys in element)  {
             count++
         }
       }
       return count;
  }
  const k =obkeys(usersWithId);
  console.log(k);

//- створити функцkію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
  //  Приклад
  //  [1,2,3,4]
  //  [2,3,4,5]
//результат
//    [3,5,7,9]
 let a = [2, 1, 2, 1];
 let b = [3, 2, 3, 2];
 function arrayThree(a,b) {
     let sum=[];
     for (let i=0; i < a.length; i++) {
         sum.push(a[i]+b[i]);
     }
     return sum;
 }
 console.log(arrayThree(a,b))

//Створити функцію яка :
//- Додає в боді блок з текстом "Hello owu"
 //- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи


 function appender(type, content) {
    let block = document.createElement(type);
    block.innerText = content;
    document.body.appendChild(block);
 }
 appender('div', 'Hello owu');


//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
 //Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці

 let cars = [ {model: 'Opel', year: 1990, horsePowers: 110, color: 'silver'} ,
     {model: 'BMW', year: 2015, horsePowers: 140, color: 'black'} ,
     {model: 'Mercedes', year: 1999, horsePowers: 120, color: 'silver'},
     {model: 'Ford', year: 1980, horsePowers: 110, color: 'red'} ,
     {model: 'VW', year: 2000, horsePowers: 150, color: 'white'} ,
     {model: 'Skoda', year: 2005, horsePowers: 170, color: 'yellow'} ,
     {model: 'Kia', year: 2010, horsePowers: 130, color: 'orange'} ,
     {model: 'Honda', year: 1990, horsePowers: 110, color: 'silver'} ,
     {model: 'Seat', year: 2013, horsePowers: 110, color: 'blue'} ,
     {model: 'Toyota', year: 2012, horsePowers: 120, color: 'red'}]

  function listofcars(array,id) {
   let div = document.getElementById('id');
   let ul = document.createElement('ul');
   for (let i=0; i<cars.length; i++) {
       let car = cars[i];
       let li = document.createElement('li');
       li.innerText = `${i} - ${cars.model}`;
       ul.appendChild(li);
   }
    div.appendChild(ul);

  }
 listofcars(cars,'list');

//- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
//Для кожної властивості створити всередені блока автомоблія свій блок

