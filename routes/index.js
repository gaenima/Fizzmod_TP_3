import express from 'express'
import {calculo} from '../api/operaciones.js'
import {randomNumber} from '../api/random.js'
import  * as info  from '../api/fileSystem.js'



const router = express.Router()
// router.use(express.urlencoded({extended: true}))
// router.use(express.json())

let hora = new Date().getHours()
router.get('/', (req, res) => {
    let date = new Date().toLocaleString()
    res.send(`<h1 style="color:orange; font-family:arial;">
                ${hora >= 6 && hora <= 12  
                ? '¡¡¡Buenos días!!!'
                : hora >= 13 && hora <=19
                ? '¡¡¡Buenas tardes!!!'
                : '¡¡¡Buenas noches!!!'
                }
              </h1> <hr><h3 style="color:magenta;">${date}</h3`)
              console.log(date, typeof date)
})

router.get('/random', (req,res) => {
    randomNumber(num => {
    res.json({num})
    })  
    
})

router.get('/info',async (req, res) => {
    res.json({info: await info.readPkgJson()})
    
})

router.get('/operaciones', (req, res) => {
   
    let {num1, num2, operacion} = req.query
    
    res.json(calculo(num1, num2, operacion))
   
})

router.get('*', (req,res) => {
    let {url, method} = req
    res.send(`<b style="color:red";>Lo sentimos. No está definida la ruta ${url} en el método ${method}.</b>`)
})

export default router