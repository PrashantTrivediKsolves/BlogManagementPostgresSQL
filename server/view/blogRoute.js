import express from 'express';

const routerBlog=express.Router();

import {authenticateToken} from '../middlewares/jwt.js'

import { BlogModel } from "../postgres/blog.js"
import {newuserModel} from "../postgres/nuser.js"

// Create Blog....................
routerBlog.post('/blogs', async (req, res) => {
    try {
      const { username,title, content } = req.body;
      const blog = await BlogModel.create({ username,title, content });
      res.status(201).json(blog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // Get All Blogs..............................
  routerBlog.get('/blogs', async (req, res) => {
    try{
        const blogs=await BlogModel.findAll({});
        if(blogs.length==0)
        {
          return res.status(200).json({err:"Blog not found"})
        }
        return res.status(200).json(blogs);
       }
    catch(err)
    {
        console.log(err);
        return res.status(500).json({err:"Enternal server error"});
    }
  });
  // GET blogs by specific username
  routerBlog.get('/blogsuser/:username', async (req, res) => {
    const { username } = req.params;
  
    try {
      // Find the user by username
      const user = await BlogModel.findOne({ where: { username } });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Find all blogs authored by the user
      const blogs = await BlogModel.findAll({ where: { username: user.username } ,order: [['createdAt', 'DESC']] });
  
      if (blogs.length === 0) {
        return res.status(404).json({ error: 'No blogs found for this user' });
      }
  
      res.json(blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Get Single Blog...............
  routerBlog.get('/blogs/:id', async (req, res) => {
    try {
      const blog = await BlogModel.findByPk(req.params.id);
      if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
      res.json(blog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // Update Blog.......
  routerBlog.put('/blogs/:id', async (req, res) => {
    try {
      const { title, content } = req.body;
      const [updated] = await BlogModel.update({ title, content }, { where: { id: req.params.id } });
      if (updated) {
        const updatedBlog = await BlogModel.findByPk(req.params.id);
        return res.json(updatedBlog);
      }
      return res.status(404).json({ error: 'Blog not found' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  // Delete Blog..........
  routerBlog.delete('/blogs/:id', async (req, res) => {
    try {
      const deleted = await BlogModel.destroy({ where: { id: req.params.id } });
      if (deleted) {
        return res.status(204).send();
      }
      return res.status(404).json({ error: 'Blog not found' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  export default routerBlog;
