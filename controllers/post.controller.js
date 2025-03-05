import postModel from "../models/post.model.js";

export const getPosts =async (req, res) => {
    const posts = await postModel.find()
    res.status(200).json('Posts', posts)
}

export const getPost =async (req, res) => {
    const post = await postModel.findOne({slug: req.params.slug})
    res.status(200).json('Post', post)
}

export const createPost = async (req, res)=> {
    const newPost = new postModel(req.body)

    const post = await newPost.save()
    res.status(200).json(`${post} Has Been Created`)
}

export const deletePost = async (req, res)=>{
    const post = await postModel.findByIdAndDelete(req.params.id)
    res.status(200).json(`${post} Has Been Deleted`)
}