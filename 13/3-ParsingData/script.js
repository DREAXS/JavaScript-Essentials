const variable = [
  { hobby: 'drinking', person: 'Alper' },
  { hobby: 'playing card', person: 'Alper' },
  { hobby: 'take a trip', person: 'Alper' },
];
//Array tipinde

console.log(JSON.stringify(variable));

localStorage.setItem('todos', JSON.stringify(variable));

const storedData = localStorage.getItem('todos');

console.log(JSON.parse(storedData));
