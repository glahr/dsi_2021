// ***** String concatination
var string = "Hello";
// string += " World";
string = string + " World";
console.log(string + "!");




// // ***** Operadores matemáticos básicos: +, -, *, /
// console.log((5 + 4) / 3);
// console.log(undefined / 5);
// function test1 (a) {
//   console.log( a / 5);
// }
// test1();




// // ***** Equality 
// var x = 4, y = 4;
// if (x == y) {
//   console.log("x=4 é igual a y=4");
// }

// x = "4";
// if (x == y) { // type coercion
//   console.log("x='4' é igual a y=4");
// }





// // ***** Strict equality
// if (x === y) {
//   console.log("Strict: x='4' é igual a y=4");
// }
// else {
//   console
//   .log("Strict: x='4' NÃO é igual a y=4");
// }






// // ***** If statement (todos falsos)
// if ( false || null || 
//      undefined || "" || 0 || NaN) {
//   console.log("Essa linha nunca será executada");
// }
// else {
//   console.log ("Todos falsos");
// }
// se você quiser checar: no console use o evaluator Boolean(elemento_que_quero_confirmar);

// // ***** If statement (all true)
// if (true && "hello" && 1 && -1 && "false") {
//   console.log("Todos verdadeiros");
// }





// // ***** Melhores práticas para {}
// // Chaves na mesma linha ou depois? O return espera algo logo após!
// function a() 
// {
//   return
//   { 
//     name: "Gustavo"
//   };
// }

// function b() {
//   return { 
//       name: "Gustavo"
//   };
// }

// console.log(a());
// console.log(b());






// // For loop
// var soma = 0;
// for (var i = 0; i < 10; i++) { //lembre-se que a declaração de i aqui é persistente
//   console.log(i);
//   soma = soma + i;
// }
// console.log("Soma de 0 até 9 é: " + soma);







// // Default values
// function pedirFrangoCom(pratoAcompanhamento) {
//   if (pratoAcompanhamento == undefined){
//     pratoAcompanhamento = "qualquer coisa!"
//   }
//   pratoAcompanhamento = pratoAcompanhamento || "qualquer coisa!";
//   console.log("Frango com " + pratoAcompanhamento);
// }

// pedirFrangoCom("macarrão");
// pedirFrangoCom();
