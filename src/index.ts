import * as dotenv from 'dotenv'
dotenv.config()
import app from './server'
//este es el punto de entrada de nuestro servidor
app.listen(3001, () => {
    console.log("hello on http://localhost:3001")
})