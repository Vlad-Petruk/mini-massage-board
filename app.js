const express = require('express');
const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const userRouter = require('./routers/useRouter');

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

app.use('/', userRouter);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));