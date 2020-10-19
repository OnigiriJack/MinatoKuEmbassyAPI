let emojis = ["👻",　"👽👍", "👍"]

emojis.forEach(element => {
    let p = document.createElement("p");
    p.innerHTML = element;
    document.body.appendChild(p);
});