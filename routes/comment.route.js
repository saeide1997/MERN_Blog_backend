import express from 'express'

const commentRouter = express.Router()

commentRouter.get('/',(req, res)=>{
    res.status(200).send('comment/ works')
})

export default commentRouter