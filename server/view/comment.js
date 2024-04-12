import express from 'express';
const routerComment=express.Router();

import { commentModel } from "../postgres/commentuser.js"

routerComment.post('/comments', async (req, res) => {

    const { postId,name,text } = req.body;
    try {
      const comment = await commentModel.create({ postId ,name,text});
      res.status(201).json(comment);
    } catch (error) {
      console.error('Error creating comment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  // Get all comments for a specific post
  routerComment.get('/comments/:postId', async (req, res) => {
    const postId = req.params.postId;
    try {
      const comments = await commentModel.findAll({ where: { postId } });
      res.status(200).json(comments);
    } catch (error) {
      console.error('Error getting comments:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  // Update a comment....
  routerComment.put('/comments/:id', async (req, res) => {
    const id = req.params.id;
    const { text } = req.body;
    try {
      const comment = await commentModel.findByPk(id);
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      comment.text = text;
      await comment.save();
  
      res.status(200).json(comment);
    } catch (error) {
      console.error('Error updating comment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete a comment
  routerComment.delete('/comments/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const comment = await commentModel.findByPk(id);
  
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      await comment.destroy();
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  export default routerComment;