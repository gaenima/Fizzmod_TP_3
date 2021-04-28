let n1 = 10
let n2 = 5

const suma = (n1,n2) => n1 + n2
const resta = (n1,n2) => n1 - n2
const milti = (n1,n2) => n1 * n2
const divi = (n1,n2) => n1 / n2

function operaciones(n1,n2,cb){
    if(n1 == 'n1' && n2 == 'n2'){
       n1 = Number(n1)
       n2 = Number(n2)
    
    if(!cb || typeof n1 != 'number' && typeof n2 != 'number' ){
       return { error: {
          Numero1: {valor: n1, tipo:typeof  n1},
          Numero2: {valor:n2, tipo:typeof n2},
          Operacion: {valor: cb, typo: typeof cb}
       }}
    } }else {
        let result = cb(n1,n2)
        return { 
            Numero1: n1,
            Numero2: n2,
            Operacion: cb,
            Resultado: result
            
        }
    }
}
 console.log(`suma: ${operaciones(n1,n2,suma)}`)

export const opera = {operaciones ,
                   suma ,
                   resta,
                   milti,
                   divi,    }