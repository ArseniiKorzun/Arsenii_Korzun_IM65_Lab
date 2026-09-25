const phonebook = [
  { name: 'Marcus Aurelius', phone: '+380445554433' },
  { name: 'Seneca', phone: '+380445554434' },
  { name: 'Epictetus', phone: '+380445554435' },
];

function findPhoneByName(name) {
  for (const entry of phonebook) {
    if (entry.name === name) {
      return entry.phone;
    }
  }
}

console.log(findPhoneByName('Seneca'));
