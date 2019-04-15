import hash from 'string-hash';

class FunMap {
  constructor() {
    this.list = [];
  }

  get(element) {
    const value = this.list[hash(element)]; // CHANGE
    return value || "this ain't it, sis 💁🏽‍♂️"; // CHANGE
  }

  set(key, value) {
    this.list[hash(key)] = value; // CHANGE
  }
}

const map = new FunMap();

// 🌈 TEST ONE 🦄
map.set('🦄', 5);
console.log(map.get('🦄'));
console.log(map.get('🌈'));

// 🌈 TEST TWO 🦄
map.set('🦄', 5);
map.set('🌈', 7);

console.time('with like two records in the map');
map.get('💃🏽');
console.timeEnd('with like two records in the map');

// 🌈 TEST THREE 🦄
console.time('time to set records');
for (let i = 0; i < 1000000; i++) {
  map.set(`element${i}`, i);
}
console.timeEnd('time to set records');

console.time('with loads of records in the map');
map.get('💃🏽');
console.timeEnd('with loads of records in the map');
