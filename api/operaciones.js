
const calculo  = (operacion) => {
    if(operacion == 'suma'){
        let suma 
       return suma = (n1,n2) => n1 + n2
    }
    else if(operacion == 'resta'){
        let resta 
        return resta = (n1,n2) => n1 - n2
    }
    else if (operacion = 'multi'){
        let multi 
        return multi = (n1,n2) => n1 * n2
    }
    else {
        let divi 
        return divi = (n1,n2) => n1 / n2

    }
}

export const operaciones = (num1,num2,calculo) => {
    if(num1 == 'num1' && num2 == 'num2'){
       num1 = Number(num1)
       n2 = Number(num2)
    
    if(!calculo || typeof num1 != 'number' && typeof num2 != 'number' ){
       return { error: {
          Numero1: {valor: num1, tipo:typeof  num1},
          Numero2: {valor:num2, tipo:typeof num2},
          Operacion: {valor: operacion, typo: typeof operacion}
       }}
    } }else {
        let result = operacion,num1,num2
        return { 
            Numero1: num1,
            Numero2: num2,
            Operacion: operacion,
            Resultado: result            
        }
    }
}
 


