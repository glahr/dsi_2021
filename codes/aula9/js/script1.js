// DOM manipulation
// console.log(document.getElementById("title")); // não precisamos de window porque procuramos via escopo global

function digaOi () {
  var name = document.getElementById("name");
  console.log(name);
  var name = document.getElementById("name").value;

  // var message = "Oi " + name + "!";
  // document.getElementById("content").textContent = message;



  // var message = "<h2>Oi " + name + "!</h2>";
  // document.getElementById("content").textContent = message;

  // document.getElementById("content").innerHTML = message;



  if (name === "estudante") {
    var title = document.querySelector("#title").textContent;
    title += " & Curtindo pacas!";
    document.querySelector("#title").textContent = title; // algo altera? não, porque é uma cópia de uma primitiva
    
    // document.querySelector("h1").textContent = title;
  }
}