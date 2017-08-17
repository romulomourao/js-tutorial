const json = require('./cars.json');


console.time('filter and map');
const honda = json.filter( car => car.brand === 'Honda' )
                  .map( car => car.model );

console.timeEnd('filter and map');

console.time('reduce');
const honda2 = json.reduce((anterior, atual) => {
  return atual.brand === 'Honda'? [...anterior, atual.model] : anterior;
}, []);
console.timeEnd('reduce');

console.log(honda);
console.log(honda2);

