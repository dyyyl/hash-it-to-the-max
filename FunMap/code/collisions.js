import hash from 'string-hash';

class FunMap {
  constructor() {
    this.list = [];
  }

  get(element) {
    const hashKey = hash(element);

    if (!this.list[hashKey]) {
      return "this ain't it, sis 💁";
    }

    const value = this.list[hashKey].find(pair => pair[0] === element);
    return value[1];
  }

  set(key, value) {
    const hashKey = hash(key);

    if (!this.list[hashKey]) this.list[hashKey] = [];

    this.list[hashKey].push([key, value]);
  }
}

const map = new FunMap();

// 🌈 TEST ONE 🦄
console.log('🌈 TEST ONE 🦄');
map.set('🦄', 5);
console.log(map.get('🦄'));
console.log(map.get('🌈'));

// 🌈 TEST TWO 🦄
console.log('🌈 TEST TWO 🦄');
map.set('🦄', 5);
map.set('🌈', 7);

console.time('with like two records in the map');
map.get('💃🏽');
console.timeEnd('with like two records in the map');

// 🌈 TEST THREE 🦄
console.log('🌈 TEST THREE 🦄');
console.time('time to set records');
for (let i = 0; i < 1000000; i++) {
  map.set(`element${i}`, i);
}
console.timeEnd('time to set records');

console.time('with loads of records in the map');
map.get('💃🏽');
console.timeEnd('with loads of records in the map');
