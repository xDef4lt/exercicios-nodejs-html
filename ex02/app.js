const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("app/public"));

app.set("view engine", "ejs");
app.set("views", "./app/views");

const router = require("./app/routes/router");
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(express.json());

app.listen(port, () => {
    console.log(`Servidor ouvindo na porta ${port}`);
});