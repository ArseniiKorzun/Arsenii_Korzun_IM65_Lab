function fn() {
  const obj1 = { name: 'Marcus' };
  let obj2 = { name: 'Aurelius' };

  obj1.name = 'Marcus Aurelius';
  obj2.name = 'Seneca';
  obj2 = { name: 'Epictetus' };

  console.dir({ obj1, obj2 });
}

fn();
