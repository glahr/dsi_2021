// Construtores de funções
function teste(){
  console.log(this);
  this.meuNome = "Gustavo";
}
teste()
console.log(this);




// function Circulo (raio) {
//   this.raio = raio;
//  // return {};
// }
// var meuCirculo = new Circulo(10); // coloque e tire o new
// console.log(meuCirculo);



// function Circulo (raio) {
//   this.raio = raio;
// }

// Circulo.prototype.calcArea = 
//   function () {
//     return Math.PI * Math.pow(this.raio, 2);
//   };


// var meuCirculo = new Circulo(10);
// console.log(meuCirculo.calcArea());

// var meuOutroCirculo = new Circulo(20);
// console.log(meuOutroCirculo);
