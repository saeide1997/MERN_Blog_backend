import express from 'express'

const userRouter = express.Router()

userRouter.get('/',(req, res)=>{
    res.status(200).send('user/ works')
})

export default userRouter