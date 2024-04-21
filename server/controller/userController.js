import { UserModel } from "../postgres/postgres.js"
export const getAllEmp=async(req,res)=>
{
    // console.log("GET bhai");...............
    try{
        const users=await UserModel.findAll();
        if(users.length==0)
        {
            return res.status(200).json({err:"User not found"})
        }
        return res.status(200).json(users);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({err:"Enternal server error"});
    }
}
export const getEmp = async (req, res) => {
    try {
        // Access the query parameter emp_id.....
        let empId = req.params['emp_id'];
        // console.log(req.params);
        // console.log(empId);
        // Check if empId is provided
        if (!empId) {
            return res.status(400).json({ error: "emp_id parameter is missing" });
        }
        // Search for the user based on the empId field
        const user = await UserModel.findOne({ where: { empId: empId } });

        // Check if user is found
        if (user) {
            return res.status(200).json({ user: user });
        } else {
            return res.status(404).json({ error: "User not found" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
    }
}
// post...........
export const AddEmp=async(req,res)=>
{
    const {name,email,designation,empId}=req.body;
    try{
        const emp=await UserModel.findOne({where :{empId:empId}});
        if(emp==null){
            await UserModel.create(req.body);
            return res.status(201).json({message:"Emp added success fully"})
        }
        return res.status(200).json({message:"Already found"});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({err:"Enternal server error"});
    }
}
//putS..........
export const UpdateEmp=async(req,res)=>
{
    let empId=req.params.emp_id;
    try
    {
        const emp=await UserModel.update(req.body,{where:{empId}});
        return res.status(202).json(req.body);
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({err:"Enternal server error"});
    }
}
// delete.....................
export const DeleteEmp=async(req,res)=>
{
    let empId=req.params.emp_id;
    try
    {
        const emp=await UserModel.findOne({where :{empId:empId}});
        if(emp==null){
            return res.status(404).json({message:"Not found"})
        }
        await emp.destroy();
        return res.status(200).json({message:"Deleted sucessfully"});
    }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({err:"Enternal server error"});
    }
}
