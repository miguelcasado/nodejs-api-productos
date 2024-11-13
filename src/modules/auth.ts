import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
//para sign-in
export const comparePasswords = (password, hashPassword) => {
    //ambos retornan una promesa, por eso son asincronos
    return bcrypt.compare(password,hashPassword)
}
//para sign-up
export const hashingPassword = (password) => {
    return bcrypt.hash(password, 5)
}
//necesito pasarle por parametros algo que sea unico
//por ejemplo el id y el username
export const createJWT = (user) => {
    const token = jwt.sign({
        id: user.id, username: 
        user.username
    },
    process.env.JWT_SECRET)
}

//método para proteger las rutas
export const protect = (req,res) => {
    //bearer hace que el jwt añada otro token extra
    const bearer = req.headers.authorization

    if(!bearer){
        res.status(401)
        res.json({message: 'not authorized'})
        return
    }

    const [,token] = bearer.split(' ')

    if(!token){
        res.status(401)
        res.json({message: 'not valid token'})
        return
    }

    try{
        const user = jwt.verify(token,process.env.JWT_SECRET)
        req.user = user
    }catch(e){
        res.status(401)
        res.json({message: 'not valid token'})
        return
    }
}


