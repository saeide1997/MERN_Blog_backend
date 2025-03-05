import express from 'express'
import bodyParser from "body-parser"
import Post from '../models/post.model.js'
import { createPost, getPost, getPosts } from '../controllers/post.controller.js'

const postRouter = express.Router()

var jsonParser = bodyParser.json()

postRouter.get('/',getPosts)
postRouter.get('/:slug',getPost)
postRouter.post('/new', jsonParser, createPost)

export default postRouter