import express from 'express'
import bodyParser from "body-parser";
import cors from "cors";
import usersRouter from "./apps/users.js";



async function init() {
const app = express()
const port = 3003

app.use(cors());
  app.use(bodyParser.json());
  app.use("/users", usersRouter);

app.get('/',  (req, res) => {

  res.send('Hello World!+++++++')


})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

init();
