function solve() {


  let text = document.getElementById("input").value;

  text = text.split(".").filter(t => t.trim().length > 0).map(w => w + ".");
  let output = document.getElementById("output");
  

  while(text.length > 0){

    let p = document.createElement("p");
    let nextSentences = text.splice(0,3).join(" ");
    p.textContent = nextSentences;
    output.appendChild(p);
  }


  console.log(text);

}