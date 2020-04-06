//За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)


let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: [{city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}]
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: [{city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}]
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: [{city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}]
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: [{city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}]
}, {
    name: 'max',
    age: 30,
    status: true,
    address: [{city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}]
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: [{city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}]
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: [{city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}]
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: [{city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}]
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: [{city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}]
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: [{city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}]
}, {
    name: 'max',
    age: 31,
    status: true,
    address: [{city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}]
}];


 let container = document.getElementById('container');
 for (const user of users) {
     let maindiv = document.createElement('div');
     for (const property in user) {
         let smalldiv = document.createElement('div');
         smalldiv.innerText = `${user[property]}`;
         maindiv.appendChild(smalldiv);
     }
    container.appendChild(maindiv);
 }



 //За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//let box = document.getElementById('box');
//for (const user of users) {
  //let smallbox = document.createElement('div');
  //  for (const property in user) {
  //    let propdiv = document.createElement('div');
     // user.name.innerText = user.name;
     // user.age.innerText = user.age;
   //   user.status.innerText = user.status;
   //   for (const item in user.address) {
    //     let adddiv = document.createElement('div');
    //     adddiv.innerText = `${JSON.stringify(user.address[item])}`;
      //   user.address.appendChild(adddiv);
     // }
    //  propdiv.appendChild(user.name);
    //  propdiv.appendChild(user.age);
    //  propdiv.appendChild(user.status);
   //   propdiv.appendChild(user.address);
    //  smallbox.appendChild(propdiv);

   // }

  //  box.appendChild(smallbox);
 // }


//- Дано 2 масиви з рівною кількістю об'єктів.З'єднати в один об'єкт користувача та місто з відповідними"id" та "user_id" .Записати цей об'єкт в новий масив
//Частковий приклад реультату:let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'},];

  let usersWithCities = [];
for (const user of usersWithId) {
    for (const citi of citiesWithId ) {
        if (user.id === citi.user_id) {
            user.address = citi;
            usersWithCities.push(usersWithId);
        }
    }
}
    console.log(usersWithCities);


//-створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу

 let h3 = document.createElement('h3');
 h3.innerText = 'Chaooooo';
 console.log(h3);
 let point = document.getElementById('point');
 point.appendChild(h3);
let targets = document.getElementsByClassName('target');
for (const target of targets) {
    let node = h3.cloneNode(true);
    target.appendChild(node);
}

//- змінити цей текст використовуючи селектори id, class,  tag
 let hh = document.getElementsByTagName('h3');
 hh.innerText = 'Good day';
 let point1 = document.getElementById('point');
 point1.innerText = 'Helloooo';
 const targets1 = document.getElementsByClassName('target');
 for (let targ of targets1) {
     targ.innerText = 'Aloha';
 }

//- змінити висоту та ширину блоку використовуючи селектори id, class,  tag

let point2 = document.getElementById('point');
 point2.style.width = '200px';
 point2.style.height = '200px';

 let tar = document.getElementsByClassName('target');
  for (let t of tar) {
      t.style.width = '200px';
      t.style.height = '200px';

  }

//- за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені

  let tableone = document.createElement('table');
  let tr = document.createElement('tr');
    for (let i =0; i<3; i++) {
       let td = document.createElement('td');
        tr.appendChild(td);
    }
  tableone.appendChild(tr);
  document.body.appendChild(tableone);

//- за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені

  let tabletwo = document.createElement('table');
   for (let i=0; i<10; i++) {
       let tr = document.createElement('tr');
       for (let j=0; j<3; j++) {
           let td = document.createElement('td');
           tr.appendChild(td);
       }
       tabletwo.appendChild(tr);
   }
    document.body.appendChild(tabletwo);

   //- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені

let tablethree = document.createElement('table');
for (let i=0; i<10; i++) {
    let tr = document.createElement('tr');
    for (let j=0; j<5; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tablethree.appendChild(tr);
}
document.body.appendChild(tablethree);

//- за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

let tablefour = document.createElement('table');
let n = +prompt('please, enter number');
let m = +prompt('please, enter number');

for (let i=0; i<n; i++) {
    let tr = document.createElement('tr');
    for (let j=0; j<m; j++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    tablefour.appendChild(tr);
}
document.body.appendChild(tablefour);


//--Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//- знайти всі елементі, які мають id
//- знайти всі параграфи ,та змінити текст на hello oktenweb!
 //   - знайти всі div та змінити ім колір на червоний
//   - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
   // створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
   // Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
  //  При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
 //   Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//todo add rules

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
