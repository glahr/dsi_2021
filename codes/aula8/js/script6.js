// Cópia por referência vs cópia por valor
var a = 7;
var b = a;
console.log("a: " + a);
console.log("b: " + b);

// b = 5;
// console.log("Depois de atualizar b:");
// console.log("a: " + a);
// console.log("b: " + b);



// var a = { x: 7 };
// var b = a;
// console.log(a);
// console.log(b);

// b.x = 5;
// console.log("Depois de atualizar b.x:");
// console.log(a);
// console.log(b);






// // Passagem por referência vs por valor
// function mudarPrimitiva(valorPrim) {
//   console.log("dentro de mudarPrimitiva...");
//   console.log("antes:");
//   console.log(valorPrim);
  
//   valorPrim = 5;
//   console.log("depois:");
//   console.log(valorPrim);
// }

// var valor = 7;
// mudarPrimitiva(valor); // valorPrim = valor
// console.log("after mudarPrimitiva, orig valor:");
// console.log(valor);






// function changeObject(objValue) {
//   console.log("in changeObject...");
//   console.log("before:");
//   console.log(objValue);
  
//   objValue.x = 5;
//   console.log("after:");
//   console.log(objValue);
// }

// value = { x: 7 };
// changeObject(value); // objValue = value
// console.log("after changeObject, orig value:");
// console.log(value);
