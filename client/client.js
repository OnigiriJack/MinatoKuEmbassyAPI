//let dumb = require("app.js")
let j = document.createElement("p");
j.innerHTML = dumb;
document.body.appendChild(j);
let emojis = ["👻",　"👽👍", "👍"]

emojis.forEach(element => {
    let p = document.createElement("p");
    p.innerHTML = element;
    document.body.appendChild(p);
});