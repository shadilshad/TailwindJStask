let x=name;
console.log(x);

function greenperson(name){
    console.log("hello world " + name);    
}
greenperson("shadil");

const says=(name)=>"hi " + name;
console.log(says("Aaro"));



const mele=(aah) => "Hey! Am working in mele " + aah;
console.log(mele("technology"));


let xy=(sandy)=>"Sandy is the name of " + sandy;
console.log(xy("sandhiya"));

function add(a,b){
    return a+b;
}
console.log(add(5,7));

const multi=(b,c)=>{
    return "B x C is " + ( b*c)
};
console.log(multi(5,7));

let globalVar = "Global";

function show() {
  console.log(globalVar); 
}
console.log(globalVar); 


function createCounter() {
  let count = 0;

  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = 0),
    get: () => count
  };
}

let counter = createCounter();

