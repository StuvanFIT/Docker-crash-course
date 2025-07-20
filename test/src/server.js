const express = require('express');
const app = express();



app.get('/', (req, res) => {
    res.send("Welcome to my node js app fefwefewfewf!");
});

app.listen(3000, function () {
    console.log("app is listening on port 3000!")
})