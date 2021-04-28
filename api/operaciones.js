
const getOperador = operacion => {
    let deco = {
        'suma' : '+',
        'resta' : '-',
        'mult' : '*',
        'div' : '/'
    }
    return deco[operacion]
}

export const calculo = (num1, num2, operacion) => {
    let tnum1 = Number(num1)
    let tnum2 = Number(num2)
    let toperacion = getOperador(operacion)
    
    console.log(toperacion)

    if(isNaN(tnum1) || isNaN(tnum2) || toperacion == undefined ) {
        let error = { 
            num1: { valor: num1, tipo: tnum1 },
            num2: { valor: num2, tipo: tnum2 },
            operacion: { valor: operacion, tipo: toperacion }
        }
        return {error}
    }
    else {
        return { 
            //num1, num2, operacion, resultado: eval(`${num1}${getOperador(operacion)}${num2}`)
            num1, num2, operacion: getOperador(operacion), resultado: eval(`${num1}${getOperador(operacion)}${num2}`)
        }
    }
}


