import { Router } from "express";
import { pool } from "../utils/db.js";
const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
   //let query = `select * from users`;
  const result = await pool.query(`select * from users`);
  console.log(result);
    
   return res.json({
       data: result,
     });
})

export default usersRouter;