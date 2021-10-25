function digaOi(event) {
  console.log(this);
  var name = document.getElementById("name").value;

  var message = "<h2>Oi " + name + "!</h2>";
  document.getElementById("content").textContent = message;

  document.getElementById("content").innerHTML = message;

  if (name === "estudante") {
    var title = document.querySelector("#title").textContent;
    title += " & Curtindo pacas!";
    document.querySelector("h1").textContent = title;
  }
}

document.querySelector("button").addEventListener("click", digaOi);

// document.querySelector("body").addEventListener("mousemove", 
//     function (event) {
//       // if (event.shiftKey === true) {
//         console.log("(" + event.clientX + ", " + event.clientY + ")");
//       // }
//     }
// );