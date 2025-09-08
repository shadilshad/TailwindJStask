function greets(name){
console.log("my name is " + name);
}
greets("shadil");


function pari(a,b){
    return a+b;
}
let result= pari(5,2);
console.log(result);


const met = (who) => "hi, did u meet " + who + "yesterday?";
console.log(met("shadil"));

let data= "njan alle";
function happy(solllu){
    happy="ntho";
    console.log(data);
    console.log(happy);
}
happy();



const obj = {
  name: "Shadu",
  greet: function() {
    console.log(this.name);
  }
};

obj.greet(); // Shadu
