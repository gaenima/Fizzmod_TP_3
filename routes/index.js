import express from 'express'
import fs from 'fs'
import util from 'util'
import {opera} from '../operaciones.js'


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
    res.send('<h2 style="color:green";>Bienvenidos la Ruta random</h2>')
})

router.get('/info', (req, res) => {
    
    info = {};
      (async() => {
 
    try {
        //Leer package.json
        let packageJson = await fs.promises.readFile('./package.json','utf-8')
        console.log('pkgJson ==> ', packageJson)
        //guardar la info en referenia info
         info = {
            ContenidoStr: util.format('%j', packageJson),
            ContenidoObj:  packageJson,
            size: packageJson.length
        }
        console.log('info==> ', info)
        //leer archivo info.txt
        let i = await fs.promises.readFile('../info.txt','utf-8')
        //escribir en info.txt
        await fs.promises.writeFile('../info.txt', JSON.stringify(info))
        console.log('escritura ok',i)

        //leer archivo info.txt modificado
        await fs.promises.readFile('../info.txt','utf-8' )
        console.log('r2 ok', i)

    }
    catch(error){
         console.log(`Error en operación FS: ${error}`) 
    }
    })()

    
     res.send (`<h1 style="color:grey";>Bienvenido a la sección info ${JSON.stringify(info)} ${new Date().toLocaleString()} </h1>`)
    
})

router.get('/operaciones', (req, res) => {
    //let {url, method} = req
    let datos = req.query
    let ope = opera.operaciones (datos.num1, datos.num2, datos.operacion)
    res.json(ope)
      
    res.send('<h1 style="color:blue";>Operaciones</h1>')
})

router.get('*', (req,res) => {
    let {url, method} = req
    res.send(`<b style="color:red";>Lo sentimos. No está definida la ruta ${url} en el método ${method}.</b>`)
})

export default router