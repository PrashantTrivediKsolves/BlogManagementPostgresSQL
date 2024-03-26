import express from 'express';
const router=express.Router();

import { getAllEmp ,AddEmp,UpdateEmp,DeleteEmp} from '../controller/userController.js';

router.get("/getAll",getAllEmp);

router.post("/addEmp",AddEmp);

router.put("/updateEmp/:emp_id",UpdateEmp);


router.delete("/deleteEmp/:emp_id",DeleteEmp)


export default router;