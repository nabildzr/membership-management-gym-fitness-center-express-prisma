import dotenv from 'dotenv'
import express from 'express'
import  userRouter  from './routes/userRouter.js';
import membershipRouter from './routes/membershipRouter.js';
import paymentRouter from './routes/paymentRouter.js';


dotenv.config()
const app = express();

app.use(express.json())


app.use('/user', userRouter)
app.use('/membership', membershipRouter)
app.use('/payment', paymentRouter)

const PORT = process.env.PORT || 2000

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`)
})