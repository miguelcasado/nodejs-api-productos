import * as dotenv from 'dotenv'
dotenv.config()
import config from './config'
import app from './server'
//este es el punto de entrada de nuestro servidor
app.listen(config.port, () => {
    console.log(`hello on http://localhost:${config.port}`)
})