 import fs from 'fs'

 export const readPkgJson = async () => {
     try{
         let content = await fs.promises.readFile('package.json', 'utf-8')
         let info = {}
         info.contenidoStr = content,
         info.contenidoObj = JSON.parse(content),
         info.size = content.length
         console.log(info)
         await fs.promises.writeFile('info.txt', JSON.stringify(info,null,'\t'))
         return info
     }
     catch(err) {
         console.log('Unable to read package.json file', new Error(`Reading error: ${err}`))
     }
 }
 