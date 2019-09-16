// How to copy/duplicate Arrays in Javascript | TRUZZ BLOGG

// 1

// changed the original array 
let arr = ['london','Madrid','Paris']; 
let arr2 = arr; 

console.log('arr2 Array:', arr2); 
console.log('arr Array:', arr); 
  
arr2.push('Sao Paulo'); 
  
console.log('***New City Added!***');
console.log(arr2); 
console.log(arr); 
// We have added an item to arr2
// But, the original array(arr) got modified too

// 2

let clubs = ['PSG', 'Bayer', 'RealMadrid']
let newClubs = clubs.slice();

console.log(clubs);
console.log(newClubs);

newClubs.push('Liverpool');

console.log("###New Club Added!###");
console.log(clubs);
console.log(newClubs);

// 3

let arr1 = ['aa', 12, 25, 'bb'];
let arr2 = [...arr1];

console.log(arr1);
console.log(arr2);

arr2.push('Yes');

console.log(" New word added to arr2 !!!")

console.log(arr1);
console.log(arr2);


// Classical Way | Array inside another Array
let classicalArr1 = ['a','b']; 
let classicalArr2 = [classicalArr1,'c','d']; 
console.log(classicalArr2);


// Modern Way | Spread Operator
let myArr1 = ['dd', 'gg', 'zz']
let myArr2 = [...myArr1, 'ff', 22, 'kk']
console.log(myArr2);


let arr1 = ['ZZ', 'rr', 72, 'TT', 10];
let arr2 = ['TR', 'UZZ', 'BLO', 'GG']
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 4

let arr1 = ['car', 'bike', 'skate'];
let arr2 = Array.from(arr1);

console.log(arr1);
console.log(arr2);

arr2.push('hoverboard');

console.log("###New Item Added!###");

console.log(arr1);
console.log(arr2);









