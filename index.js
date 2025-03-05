import express from 'express'
import userRouter from './routes/user.route.js';
import postRouter from './routes/post.route.js';
import commentRouter from './routes/comment.route.js';
import connectDB from './lib/connectDB.js';
import webhookRouter from './routes/webhook.route.js';

const app= express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.use('/comments', commentRouter)
app.use('/webHooks', webhookRouter)

app.use((error, req, res, next)=> {
    res.status(error.status || 500)

    res.json({
        message: error.message || 'SomeThing Went Wrong',
        status: error.status,
        stack: error.stack
    })
})

const port = process.env.PORT || 3000
app.listen(port, ()=>{
    connectDB()
    console.log('Server Is Runing On Port 3000');
    
})