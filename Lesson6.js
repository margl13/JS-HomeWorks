//- создать массив с 20 числами.
//-- при помощи метода sort отсортировать массив.

 let numbers = [26, 7, 13, 1, 6, 14, 4, 3, 20, 15, 8, 11, 27, 5, 2, 23, 9, 88, 46, 84];
 numbers.sort(function (a, b) {
 return a - b;
 });
console.log(numbers);

//-- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

numbers.sort(function (a, b) {
 return b - a;
});
console.log(numbers);

//-- при помощи filter получить числа кратные 3

let filter = numbers.filter(e => e % 3 === 0);
console.log(filter);

//-- при помощи filter получить числа кратные 10

let filternew = numbers.filter(e => e % 10 === 0);
console.log(filternew);

//-- перебрать (проитерировать) массив при помощи foreach(

numbers.forEach(function (element, index) {
  console.log(element + 'has index ' + index);
});

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

let mappednumbers = numbers.map(elem => elem * 3);
console.log(mappednumbers);

//- создать массив со словами на 15-20 элементов.

let colors = ['red', 'blue', 'pink', 'white', 'purple', 'black', 'green', 'orange', 'violet', 'brown', 'silver', 'gold', 'yellow', 'grey', 'beige'];

//-- отсортировать его по алфавиту в восходящем порядке.

colors.sort();
console.log(colors);

//-- отсортировать его по алфавиту  в нисходящем порядке.

colors.reverse();
console.log(colors);

//-- отфильтровать слова длиной менее 4х символов

let result = colors.filter(value => value.length < 4);
console.log(result);

//-- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let muppedcolors = colors.map(elem => elem + '!');
console.log(muppedcolors);

//Все робити через функції масивів (foreach, map ...тд)
//Дан масив :
let users = [ {name: 'vasya', age: 31, status: false},
              {name: 'petya', age: 30, status: true},
              {name: 'kolya', age: 29, status: true},
              {name: 'olya', age: 28, status: false},
              {name: 'max', age: 30, status: true},
              {name: 'anya', age: 31, status: false},
              {name: 'oleg', age: 28, status: false},
              {name: 'andrey', age: 29, status: true},
              {name: 'masha', age: 30, status: true},
              {name: 'olya', age: 31, status: false},
              {name: 'max', age: 31, status: true} ];
//- відсортувати його за  віком (зростання , а потім окремо спадання)
users.sort(function (a, b)  {
    return a.age - b.age
});
 console.log(users);
 users.sort((a, b) => b.age - a.age)  ;
 console.log(users);

//- відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

 let shortnames = users.sort((a, b) => a.name.length - b.name.length);
 console.log(shortnames);

 let longnames = users.sort((a, b) => b.name.length - a.name.length);
 console.log(longnames);

//- пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)

 let userswithid = users.map((user, index) =>{
     user.id = index;
     return user;
});
 console.log(userswithid);

 //- відсортувати його за індентифікатором

let sortid = users.sort((a, b) => b.id - a.id);
console.log(sortid);

//-- наисать функцию калькулятора с 2мя числами и колбеком

function calculatetwo(a, b, callback) {
    console.log(callback(a, b));
}
    calculatetwo(5, 10, function (a, b) {
        return a + b;

    });
        calculatetwo(5, 10,  function (a, b) {
        return a + b - a;
});


//-- наисать функцию калькулятора с 3мя числами и колбеком

function calculatethree(a, b, c, callback) {
    return callback(a, b, c);
}
 let calc = calculatethree(2, 4, 6, function (a, b, c)  {
    return a + b - c;
 });
 console.log(calc);


let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
             {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
             {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
             {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
             {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
             {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
             {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
             {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
             {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
             {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
             {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
             {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
             {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];
//Відфільтрувати масив за наступними крітеріями :
//- двигун більше 3х літрів

   let maxvolume = cars.filter(car => car.volume > 3);
   console.log(maxvolume);

//- двигун = 2л

    let volume2l = cars.filter(car => car.volume === 2);
    console.log(volume2l);

//- виробник мерс

    let mercedes = cars.filter(car => car.producer === 'mercedes');
    console.log(mercedes);

//- двигун більше 3х літрів + виробник мерседес

     let mercplusvolume = cars.filter(car => car.producer === 'mercedes' && car.volume > 3);
     console.log(mercplusvolume);

//- двигун більше 3х літрів + виробник субару

     let subaruplusvolume = cars.filter(car => car.producer === 'subaru' && car.volume > 3);
     console.log(subaruplusvolume);

//- сили більше ніж 300

    let horsepower = cars.filter(car => car.power > 300);
    console.log(horsepower);

//- сили більше ніж 300 + виробник субару

     let subarupower = cars.filter(car => car.power > 300 && car.producer === 'subaru');
     console.log(subarupower);

//- мотор серіі ej

    let engine = cars.filter(car => car.engine.startsWith('ej'));
    console.log(engine);

    //- сили більше ніж 300 + виробник субару + мотор серіі ej

    let subaruengine = cars.filter(car => car.power > 300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
    console.log(subaruengine);


//- двигун меньше 3х літрів + виробник мерседес

    let volumemerc = cars.filter(car => car.producer === 'mercedes' && car.volume < 3);
    console.log(volumemerc);

//- двигун більше 2л + сили більше 250

    let volumepower = cars.filter(car => car.power > 250 && car.volume > 2);
    console.log(volumepower);

//- сили більше 250  + виробник бмв

    let powerbmw = cars.filter(car => car.power > 250 && car.producer === 'bmw');
    console.log(powerbmw);


//- взять слдующий массив
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}}];

//-- отсортировать его по id пользователей

    usersWithAddress.sort((a, b) => b.id - a.id);
    console.log(usersWithAddress);

//-- отсортировать его по id пользователей в обратном опрядке

   usersWithAddress.sort((a, b) => a.id - b.id);
   console.log(usersWithAddress);

//-- отсортировать его по возрасту пользователей

    usersWithAddress.sort(function(a, b){
        return a.age - b.age
    });
    console.log(usersWithAddress);


//-- отсортировать его по возрасту пользователей в обратном порядке

     usersWithAddress.sort((a, b) => b.age - a.age);
     console.log(usersWithAddress);

//-- отсортировать его по имени пользователей

     usersWithAddress.sort(function (a,b) {
        let nameA=a.name.toLowerCase(),nameB=b.name.toLowerCase();
        if (nameA < nameB) {
            return -1;
        } if (nameA > nameB) {
            return 1;
         } else {
            return 0;
         }

     });
     console.log(usersWithAddress);

     //-- отсортировать его по имени пользователей в обратном порядке

    usersWithAddress.sort(function (a,b) {
        let nameA=a.name.toLowerCase();
        let nameB=b.name.toLowerCase();
        if (nameA > nameB) {
        return -1;
        } if (nameA < nameB) {
        return 1;
        } else {
        return 0;
     }
    });
console.log(usersWithAddress);

//-- отсортировать его по названию улицы  в алфавитном порядке

    usersWithAddress.sort(function (a,b) {
    let streetA=a.address.street.toLowerCase();
    let streetB=b.address.street.toLowerCase();
    if (streetA < streetB) {
        return -1;
    } if (streetA > streetB) {
        return 1;
    } else {
        return 0;
    }

    });
    console.log(usersWithAddress);

    //-- отсортировать его по номеру дома по возрастанию

    usersWithAddress.sort(function(a, b){
    return a.address.number - b.address.number
    });
    console.log(usersWithAddress);


//-- отфильтровать (оставить) тех кто младше 30

     let youngs = usersWithAddress.filter(function (e) {
        return e.age < 30;
     });
     console.log(youngs);

//-- отфильтровать (оставить) тех у кого отрицательный статус

     let status = usersWithAddress.filter(e => e.status === false);
     console.log(status);

//-- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет

    let falseyoung =  usersWithAddress.filter(e => e.status === false && e.age < 30);
    console.log(falseyoung);

//-- отфильтровать (оставить) тех у кого номер дома четный

    let houses = usersWithAddress.filter(function (e) {
        return e.address.number % 2 == 0;
    });
    console.log(houses);