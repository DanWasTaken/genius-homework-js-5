// 1 Завдання
// Написати об'єкт студента який буде виводити ім'я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const ex1 = () => {
//   const student1 = {
//     name: 'Ivan',
//     speciality: 'Engineer',
//     averageScore: 87,
//     info () {
//       console.log(`${this.name} ${this.speciality} ${this.averageScore}`);
//     }
//   }
  
//   const student2 = {
//     name: 'Ann',
//     speciality: 'Designer',
//     averageScore: 76,
//   }

//   const student3 = {
//     name: 'John',
//     speciality: 'Computer Engineer',
//     averageScore: 98,
//   }
  
//   student1.info();
//   student1.info.call(student2);
//   student1.info.apply(student3);
// }

// ex1();


// 2 Завдання
// Написати дві кнопки і закріпити на них функції
// При натисканні на кнопку html - має видати коротке визначення що це таке.
// При натисканні на кнопку css - має видати коротке визначення що це таке.


// const ex2 = () => {
//   const htmlDefBtn = document.getElementById('html-def-btn');
//   const cssDefBtn = document.getElementById('css-def-btn');
//   const htmlDefOutput = document.getElementById('html-def-output');
//   const cssDefOutput = document.getElementById('css-def-output');

//   htmlDefOutput.hidden = true;
//   cssDefOutput.hidden = true;

//   htmlDefBtn.addEventListener('click', () => {
//     if (htmlDefOutput.hidden === true) htmlDefOutput.hidden = false;
//     else htmlDefOutput.hidden = true;
//   })

//   cssDefBtn.addEventListener('click', () => {
//     if (cssDefOutput.hidden === true) cssDefOutput.hidden = false;
//     else cssDefOutput.hidden = true;
//   })
// }

// ex2();

// 3 Завдання
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару.
// Функція має повертати назву товару і вартість.
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// const ex3 = () => {
//   const shop = {
//     calculatePrice () {
//       console.log(`Назва товару: ${this.name}. Вартість: ${Math.round(this.amount * this.price)}`);
//     }
//   }
  
//   const banana = {
//     name: 'banana',
//     price: 30,
//     amount: 4.5,
//   }
//   const cherry = {
//     name: 'cherry',
//     price: 58,
//     amount: 1.3,
//   }
//   const orange = {
//     name: 'orange',
//     price: 89,
//     amount: 3.4,
//   }
  
//   shop.calculatePrice.bind(banana)();
//   shop.calculatePrice.bind(cherry)();
//   shop.calculatePrice.bind(orange)();
// }

// ex3();
