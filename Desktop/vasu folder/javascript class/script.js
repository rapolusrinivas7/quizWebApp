console.log('this is a log message');

let a = 10;
let b = 20;
let sum = a + b;
console.log(sum);

console.log('the sum of ' + a + ' , ' + b + ' is :' + sum);

console.log(`the sum of ${a} , ${typeof b} is : ${sum}`);

let employeeName = 'srinu';
let employeeId = 91093;

window.alert(employeeName);
localStorage.setItem('rapolu', 'rular');
let val=localStorage.getItem('rapolu');
console.log(val);
let options ={
	"name1": "srinivas",
	"name2": "srinivas2",
	"name3": "srinivas3",
	"name4": "srinivas4",
}

localStorage.setItem('first', 'this is first');
let value=localStorage.getItem('first');
console.log(value);
let key="this is key";
localStorage.setItem(key, 123456)
let object={
	name:"srinvias",
	name2:"srinivas2",
	name3:"srinivas3"
}
let obje=JSON.stringify(object)

localStorage.setItem('obj',obje)
let abc=localStorage.getItem('obj')
console.log(abc)
let abd=JSON.parse(abc);
console.log(abd)