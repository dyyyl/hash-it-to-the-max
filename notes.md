Hey, my name's Dyl and this is a presentation on Hashmaps!

I made a website, so y'all can follow along at: site.netlify.blah

No cheating and looking ahead!

Let's assume you want to fill up a bookshop with books, and you don't want to put any book any where - you want to be able to easily find them again when you need them.

So, you decide that if the person that wants to buy a book knows the exact title of the book, then that's all it should take. With the only the title, any customer (with the aid of the librarian), should be able to find their book easily and quickly.

So, how can you do that? Well, obviously you can keep some kind of list of where you put each book, but then you have the same problem as searching the library - you need to search the list. Granted, the list would be smaller and easier to search, but you still don't want to search sequentially from one end of the library (or list) to the other.

You really want something that, with the title of the book, can give you the right spot at once so that all you have to do is just stroll over to the right shelf, and pick up the book.

But how can we make that happen? Well, with a bit of forethought when you set up the store, and a bit more work when you fill the store with your books!

Instead of just starting to fill up the library from one end to the other alphabetically, you devise a clever little method. You take the title of the book, run it through a small computer program which spits out a shelf number and a slot number on that shelf, and only ever place that book in its exact spot.

The beauty of this program is that later on, when a person comes back in to read the book, you feed the title through the program once again, and get back the same shelf number and slot number that you were originally given, so you always know exactly where to go for any given book!

This program is called a hash algorithm, and usually works by taking the data fed into it (the title of the book in this case) and calculates a number from it.

The beauty of such an algorithm is that if you feed the same input into it again and again, it will keep spitting out the same hash each time.

Ok, so that's basically how a hash table works.

Okay, so how many people here have heard of a hashmap before? 🙋🏽‍

people have heard ? okay cool pretend you haven't : move on

Big word alert: we use words like hashmap, map, associative array, and dictionary fairly interchangeably, but for JS (the implementation I'll be talking about today, all we need to know is):

Under the hood, in JavaScript we most commonly refer to all of these things as Objects (though a more specialized Map object exists as well, and can be invoked using the `new` keyword).

Now, you may be asking "what's so special about regular old JS objects?" Let's dig into some internals!

The average computational complexity of search, insert, and delete actions in a hashmap is O(1), meaning that generally it will only take a single operation to carry out the most common tasks related to manipulating a hashmap. That's superfast, and fantastic for storing data!

So, in order to best understand the inner workings of a hashmap, let's build one!

In Console:

```javascript
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
```

Okay great, it works more or less like we want it to - let's benchmark this meaningfully, and see how it performs under some stress.

In Console:

```javascript
// INSTANTIATION
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
for (let i = 0; i < 1000000; i++) {
  map.set(`element${i}`, i);
}

console.time('with loads of records in the map');
map.get('💃🏽');
console.timeEnd('with loads of records in the map');
```

Okay cool, so clearly our implementation is working in O(n), which is the
worst possible case (and not at all what we signed on for here). So what gives?

Well, right now when we try to find something in our map, we're looking for the element sequentially (just like we might look for books in order of appearance on a bookshelf). So, how do we make it faster? Let's introduce a hash function 😎

```javascript
// ADD THIS
import hash = from 'string-hash';

class FunMap {
  constructor() {
    this.list = [];
  }

  get(element) {
    const value = this.list[hash(x)]; // CHANGE
    return value ? value : "this ain't it, sis 💁🏽‍♂️"; // CHANGE
  }

  set(key, value) {
    this.list[hash(key)] = value; // CHANGE
  }
}

// same tests 😅
```
