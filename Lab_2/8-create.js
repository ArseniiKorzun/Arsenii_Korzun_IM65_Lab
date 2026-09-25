function createUser(name, city) {
  return { name, city };
}

const user = createUser('Marcus Aurelius', 'Roma');
console.dir(user);
