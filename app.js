let express = require("express");



//init app
const port = 5000;
const app = express();
app.use(express.static("./"));

/*  app.get("/", (_, res) => {
    res.send("こんにちはジャック💩")
})
*/
app.listen(port, () => {
    console.log(`lisening on http://localhost:${port}`)
})
