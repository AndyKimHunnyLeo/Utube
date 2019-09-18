const express = require('express')
const app = express()

const PORT = 4000;

function handleListening() {
    console.log(`Listening on port: http://localhost:${PORT}`);
}

function handleHome(req, res) {
    res.send("Hi from home!!");
}
function profile(req, res) {
    res.send("Hi from profile!!");
}
app.get("/", handleHome);

app.get("/profile", profile)

app.listen(PORT, handleListening);
