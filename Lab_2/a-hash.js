const phonebook = {
  'Marcus Aurelius': '+380445554433',
  Seneca: '+380445554434',
  Epictetus: '+380445554435',
};

function findPhoneByName(name) {
  return phonebook[name];
}

console.log(findPhoneByName('Seneca'));
