import express from 'express';
const router=express.Router();

import { getAllEmp ,AddEmp,UpdateEmp,DeleteEmp,getEmp} from '../controller/userController.js';

router.get("/getAll",getAllEmp);

router.get("/user:emp_id",getEmp)

router.post("/addEmp",AddEmp);

router.put("/updateEmp/:emp_id",UpdateEmp);

router.delete("/deleteEmp/:emp_id",DeleteEmp)


// blog rutes

export default router;