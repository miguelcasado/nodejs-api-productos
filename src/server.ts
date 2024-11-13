import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'
import { createNewUser, signIn } from './handlers/user'
const app = express()

//esto es un logging
app.use(morgan('dev'))
//permite que un usuario nos mande json
app.use(express.json())
//mete la url en un objeto
app.use(express.urlencoded({extended:true}))
//permite que todos usen la api
app.use(cors())

app.get('/',(req,res) => {
    console.log("Hola desde express")
    res.status(200)
    res.json({message: 'hello'})
})

//protejo mi api
app.use('/api', protect ,router)

app.post('/user',createNewUser)
app.post('/signin',signIn)

export default app