
import { validationResult } from 'express-validator'
//middleware para manejar los errores de las request
export const handleInputErrors = (req,res,next) => {
     //comprueba si el body esta bien formado
     const errors = validationResult(req)

     if(!errors.isEmpty){
         res.status(400)
         res.json({ errors: errors.array() })
     }else{
        next()
     }
}