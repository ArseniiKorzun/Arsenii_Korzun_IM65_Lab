function fn() {
  // Посилання на об'єкт у константі
  const obj1 = { name: 'Marcus' };
  // Посилання на об'єкт у змінній
  let obj2 = { name: 'Aurelius' };

  // Поле name можна змінити в обох об'єктах:
  // const забороняє зміну самого посилання, а не полів об'єкта
  obj1.name = 'Marcus Aurelius';
  obj2.name = 'Seneca';

  // Посилання на інший об'єкт можна записати лише в змінну (let).
  // obj1 = { name: 'X' } було б помилкою, бо obj1 — константа
  obj2 = { name: 'Epictetus' };

  console.dir({ obj1, obj2 });
}

fn();
