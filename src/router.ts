import {Router} from 'express'
import { body, oneOf, validationResult } from 'express-validator'
import { handleInputErrors } from './modules/middleware'
import { createProduct, getOneProduct,getProducts } from './handlers/product'
const router = Router()

/*
Product
*/
router.get('/product',getProducts)
router.get('/product/:id',getOneProduct)
router.put('/product/:id', body('name').isString(),handleInputErrors, createProduct)

router.post('/product',() =>{})
router.delete('/product/:id',() =>{})


/*
Update
*/
router.get('/update/:id',() =>{})
//LOS BODY LOS PUEDO METER EN UN ARCHIVO DISTINTO E IMPORTARLOç
//SIRVEN PARA VALIDAR QUE EXISTEN ESE CAMPO EN EL BODY DEL REQUEST
router.put('/update/:id',
    body('title').optional,
    body('body').optional, 
    body('version').optional,
    body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']),
    () =>{

    })
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(), 
        () =>{

        })
router.delete('/update/:id',() =>{})



/*
Update Point
*/
router.get('/updatepoint',() =>{})
router.get('/updatepoint/:id',() =>{})

router.put('/updatepoint/:id',
    body('name').optional().isString(),
    body('description').optional().isString(),
    () =>{})

router.post('/updatepoint',
    body('name').isString(),
    body('description').isString(),
    body('updateId').exists().isString(),
    () =>{})

router.delete('/updatepoint/:id',() =>{})


export default router