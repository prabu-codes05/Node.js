import express from 'express'
import userRoutes from './routes/user.routes.js'

const app = express()
app.use(express.json())

app.use('/health', (req, res) => {
    res.status(200).json({
        status: "ok",
        uptime:process.uptime()
    })
})
app.use("/api/users",userRoutes)
app.use((err, req, res, next) => {
    res.status(500).json({
        status: "error",
        message:err.message
    }) 
    next()
})

app.use((req, res, next) => {
    res.send("middleware is running........")
    next()
})

export default app