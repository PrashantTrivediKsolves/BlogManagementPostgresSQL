
import  express from 'express';
import jwt from 'jsonwebtoken'
const routeruser = express.Router();
// Secret key for JWT signing
const JWT_SECRET = 'your-secret-key';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import { newuserModel} from "../postgres/nuser.js";
// post......
routeruser.post('/signup', async (req, res) => {
    try {
      const { username, password } = req.body;
      const newUser = await newuserModel.create({ username, password });
      res.status(201).json(newUser);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  //Authenticate user and set JWT token as cookie
  routeruser.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await newuserModel.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }
        // Generate JWT token
        const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET);
        // Set JWT token as an HTTP-only cookie in the response
        res.cookie('token', token, { httpOnly: true });
        // Send the token in the response body if needed
        res.status(200).json({ message: 'Login successful', token ,username,password});
        //  res.status(200).json({username:username});
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
routeruser.get('/logout',(req,res)=>
  {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
  })
  export default routeruser;