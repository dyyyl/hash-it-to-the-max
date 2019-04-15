//  let's make our own funmap!
class FunMap {
  //  constructor to hold our items in memory
  constructor() {
    this.list = [];
  }

  //  getter takes an element, finds matching key & returns its value
  get(element) {
    const value = this.list.find(pair => pair[0] === element);
    // light error handling
    return value ? value[1] : "this ain't it, sis 💁🏽‍♂️";
  }

  //  setter adds key/value pair into memory
  set(key, value) {
    this.list.push([key, value]);
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
