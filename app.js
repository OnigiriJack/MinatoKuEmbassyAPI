let express = require("express"); // import package

// initialize app
const port = 5000;
const app = express();
// serve static files
app.use(express.static("./"));

/*  app.get("/", (_, res) => {
    res.send("こんにちはジャック💩")
})
*/
app.listen(port, () => {
    console.log(`lisening on http://localhost:${port}`)
})
